"use strict";
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
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
const io = new socket_io_1.default.Server(server, {
    cors: {
        origin: "*",
    },
});
io.on("connection", (socket) => {
    console.log("client connected");
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
(0, db_1.default)().then(() => {
    console.log("mongodb connected");
    server.listen(port);
}).catch(err => {
    console.log(err);
});
