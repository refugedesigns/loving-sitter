"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const error_1 = require("./middleware/error");
const db_1 = __importDefault(require("./db/db"));
const auth_1 = __importDefault(require("./routes/auth"));
const dogsitters_1 = __importDefault(require("./routes/dogsitters"));
const conversations_1 = __importDefault(require("./routes/conversations"));
const message_1 = __importDefault(require("./routes/message"));
const Socket_1 = __importDefault(require("./models/Socket"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
const io = new socket_io_1.default.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});
const addUsers = (userId, socketId) => __awaiter(void 0, void 0, void 0, function* () {
    //  userId !== "" && !users.some((user) => user.userId === userId) &&
    //     users.push({ userId, socketId });
    const existingSocket = yield Socket_1.default.findOne({ userId: userId });
    if (existingSocket) {
        yield existingSocket.delete();
    }
    yield Socket_1.default.create({
        socketId,
        userId
    });
});
const removeUser = (socketId) => __awaiter(void 0, void 0, void 0, function* () {
    // users = users.filter(user => user.socketId !== socketId)
    yield Socket_1.default.findOneAndDelete({ socketId: socketId });
});
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Socket_1.default.findOne({ userId: userId });
    return {
        socketId: user === null || user === void 0 ? void 0 : user.socketId,
        userId: user === null || user === void 0 ? void 0 : user.userId
    };
});
io.on("connection", (socket) => {
    console.log("client connected");
    // take userId and socketId from user
    socket.on("addUser", (userId) => __awaiter(void 0, void 0, void 0, function* () {
        yield addUsers(userId, socket.id);
        const users = yield Socket_1.default.find();
        io.emit("getUsers", users);
        console.log("Added User");
        console.log(users);
    }));
    // Send and get message
    socket.on("sendMessage", ({ _id, createdAt, updatedAt, conversationId, sender, read, recipient, text, }) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield getUser(recipient);
        io.to(user === null || user === void 0 ? void 0 : user.socketId).emit("getMessage", {
            _id,
            conversationId,
            createdAt,
            read,
            recipient,
            sender,
            text: text,
            updatedAt
        });
        console.log(`message received, sending to ${user.socketId}`);
    }));
    // remove user after disconnect
    socket.on("disconnect", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield removeUser(socket.id);
            const users = yield Socket_1.default.find();
            io.emit("removeUser", users);
            console.log("disconnected " + socket.id);
            console.log(users);
        });
    });
});
const port = parseInt(process.env.PORT, 10) || 8080;
app.set("port", port);
server.on("listening", () => {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log(`Listening on ${bind}`);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((req, res, next) => {
    req.io = io;
    next();
});
app.use("/api/auth", auth_1.default);
app.use("/api/dogsitters", dogsitters_1.default);
app.use("/api/conversations", conversations_1.default);
app.use("/api/messages", message_1.default);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "/client/build")));
    app.get("*", (_, res) => res.sendFile(path_1.default.resolve(__dirname), "client/build/index.html"));
}
else {
    app.get("/", (_, res) => {
        res.send("API is running");
    });
}
app.use(error_1.notFound);
app.use(error_1.errorHandler);
(0, db_1.default)()
    .then(() => {
    console.log("mongodb connected");
    server.listen(port);
})
    .catch((err) => {
    console.log(err);
});
