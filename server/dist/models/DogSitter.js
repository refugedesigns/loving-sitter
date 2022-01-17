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
const mongoose_1 = require("mongoose");
const BaseUser_1 = require("./BaseUser");
const bcrypt_1 = __importDefault(require("bcrypt"));
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
    isDogsitter: {
        type: Boolean,
        default: true,
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
    availability: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Availability"
    },
    price: {
        type: Number,
        required: true,
    },
    reviews: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Review"
        }]
});
DogSitterSchema.methods.matchPassword = function (enteredPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(enteredPassword, this.password);
    });
};
//Remember to remove this later
//it is for testing only
DogSitterSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password")) {
            next();
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        this.password = yield bcrypt_1.default.hash(this.password, salt);
    });
});
const DogSitter = BaseUser_1.BaseModel.discriminator("DogSitter", DogSitterSchema);
exports.default = DogSitter;
