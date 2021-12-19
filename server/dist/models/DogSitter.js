"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BaseUser_1 = require("./BaseUser");
const DogSitterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    city: String,
    address: String,
    phoneNumber: String,
    profilePhoto: String,
    about: String,
    payments: [],
    imageGallery: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Image",
        },
    ],
    isAvailable: {
        type: Boolean,
        default: false,
    },
    availability: [],
    price: {
        type: Number,
        required: true,
    },
});
const DogSitter = BaseUser_1.BaseModel.discriminator("DogSitter", DogSitterSchema);
exports.default = DogSitter;
