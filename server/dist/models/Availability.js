"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AvailabilitySchema = new mongoose_1.Schema({
    monday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    tuesday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    wednesday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    thursday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    friday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    saturday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    sunday: {
        isAvailable: {
            type: Boolean,
            default: false
        },
        time: {
            from: undefined,
            to: undefined
        }
    },
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "DogSitter"
    }
}, { timestamps: true });
const Availabilty = (0, mongoose_1.model)("Availabilty", AvailabilitySchema);
exports.default = Availabilty;
