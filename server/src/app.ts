import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import socket, { Server } from "socket.io";
import http from "http";
import path from "path";
import { notFound, errorHandler } from "./middleware/error";
import connectDB from "./db/db";
import authRoutes from "./routes/auth";
import dogsitterRoutes from "./routes/dogsitters";
import conversationRoutes from "./routes/conversations";
import messagesRoutes from "./routes/message";
import Socket from "./models/Socket"

declare module "express-serve-static-core" {
  interface Request {
    io?: Server;
    userId?: string;
  }
  interface Response {
    io?: Server;
    userId?: string;
  }
}

dotenv.config();

const app = express();

const server = http.createServer(app);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const io = new socket.Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});



const addUsers = async(userId: string, socketId: string) => {
//  userId !== "" && !users.some((user) => user.userId === userId) &&
//     users.push({ userId, socketId });
  const existingSocket = await Socket.findOne({userId: userId})
  if(existingSocket) {
     await existingSocket.delete()
    } 
  await Socket.create({
    socketId,
    userId
  })
};

const removeUser = async(socketId: string) => {
  // users = users.filter(user => user.socketId !== socketId)
  await Socket.findOneAndDelete({socketId: socketId}) 
}

const getUser = async(userId: string): Promise<{socketId: string; userId: string}> => {
  const user = await Socket.findOne({userId: userId})
  return {
    socketId: user?.socketId,
    userId: user?.userId
  }
}

io.on("connection", (socket) => {
  console.log("client connected");

  // take userId and socketId from user
  socket.on("addUser", async(userId) => {
    await addUsers(userId, socket.id);
    const users = await Socket.find()
    io.emit("getUsers", users);
    console.log("Added User")
    console.log(users)
  });
  // Send and get message
  socket.on(
    "sendMessage",
    async({
      _id,
      createdAt,
      updatedAt,
      conversationId,
      sender,
      read,
      recipient,
      text,
    }: {
      _id: string;
      createdAt: string;
      updatedAt: string;
      conversationId: string;
      sender: string;
      read: boolean;
      recipient: string;
      text: string;
    }) => {
      const user = await getUser(recipient);
      io.to(user?.socketId).emit("getMessage", {
        _id,
        conversationId,
        createdAt,
        read,
        recipient,
        sender,
        text: text,
        updatedAt
      })
      console.log(`message received, sending to ${user.socketId}`)
    }
  ); 

  // remove user after disconnect
  socket.on("disconnect", async function() {
    
    await removeUser(socket.id)
    const users = await Socket.find()
    io.emit("removeUser", users);
    console.log("disconnected " + socket.id)
    console.log(users)
  })
});

const port: Number = parseInt(<string>process.env.PORT, 10) || 8080;

app.set("port", port);

server.on("listening", () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port;

  console.log(`Listening on ${bind}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req: Request, res: Response, next: NextFunction) => {
  req.io = io;
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/dogsitters", dogsitterRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/messages", messagesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (_: Request, res: Response) =>
    res.sendFile(path.resolve(__dirname), "client/build/index.html")
  );
} else {
  app.get("/", (_: Request, res: Response) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

connectDB()
  .then(() => {
    console.log("mongodb connected");
    server.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
