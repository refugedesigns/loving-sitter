"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "BaseUser"
    },
    recipient: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "DogSitter"
    },
    message: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true });
const Review = (0, mongoose_1.model)("Review", ReviewSchema);
exports.default = Review;
