"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RequestSchema = new mongoose_1.Schema({
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "BaseUser",
    },
    recipient: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "DogSitter",
    },
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });
const Request = (0, mongoose_1.model)("Request", RequestSchema);
exports.default = Request;
