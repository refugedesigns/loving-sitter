"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    conversationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    recipient: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const message = (0, mongoose_1.model)("Message", messageSchema);
exports.default = message;
