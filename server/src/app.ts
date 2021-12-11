import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import socket, { Server } from "socket.io";
import http from "http";
import path from "path";
import { notFound, errorHandler } from "./middleware/error";
import connectDB from "./db/db";
import authRoutes from "./routes/auth"

declare module "express-serve-static-core" {
  interface Request {
    io?: Server;
  }
  interface Response {
    io?: Server;
  }
}

dotenv.config();

const app = express();

const server = http.createServer(app);

app.use(cors());

const io = new socket.Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
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

app.use("/auth", authRoutes)

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

connectDB().then(() => {
  console.log("mongodb connected")
  server.listen(port);
}).catch(err => {
  console.log(err)
});
