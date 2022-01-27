"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const socketSchema = new mongoose_1.Schema({
    socketId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});
const Socket = (0, mongoose_1.model)("Socket", socketSchema);
exports.default = Socket;
