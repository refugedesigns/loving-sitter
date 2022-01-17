"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AvailabilitySchema = new mongoose_1.Schema({
    monday: {
        type: Boolean,
        default: false,
    },
    tuesday: {
        type: Boolean,
        default: false,
    },
    wednesday: {
        type: Boolean,
        default: false,
    },
    thursday: {
        type: Boolean,
        default: false,
    },
    friday: {
        type: Boolean,
        default: false,
    },
    saturday: {
        type: Boolean,
        default: false,
    },
    sunday: {
        type: Boolean,
        default: false,
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "DogSitter",
    },
}, { timestamps: true });
const Availability = (0, mongoose_1.model)("Availability", AvailabilitySchema);
exports.default = Availability;
