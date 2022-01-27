"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const conversationSchema = new mongoose_1.Schema({
    members: [{
            type: mongoose_1.SchemaTypes.ObjectId
        }],
}, { timestamps: true });
const conversation = (0, mongoose_1.model)("Conversation", conversationSchema);
exports.default = conversation;
