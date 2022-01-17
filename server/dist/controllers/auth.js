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
exports.loadUser = exports.loginUser = exports.registerDogsitter = exports.registerBaseUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const BaseUser_1 = __importDefault(require("../models/BaseUser"));
const DogSitter_1 = __importDefault(require("../models/DogSitter"));
const Availability_1 = __importDefault(require("../models/Availability"));
const customError_1 = require("../customError");
const generateToken_1 = __importDefault(require("../utils/generateToken"));
exports.registerBaseUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const emailExists = yield BaseUser_1.default.findOne({ email: email });
    if (emailExists) {
        throw new customError_1.StatusError("A user with this email already exists", 422);
    }
    const user = yield BaseUser_1.default.create({
        name,
        email,
        password,
    });
    res.status(201).json({
        success: { message: "Signup successful" },
    });
}));
exports.registerDogsitter = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { isAvailable, availability, price } = req.body;
    if (price < 1 || price > 100) {
        throw new customError_1.StatusError("Entered value for the price is too high or too low", 401);
    }
    const user = yield BaseUser_1.default.findById(req.userId);
    if (!user) {
        throw new customError_1.StatusError("No user found.", 422);
    }
    const availabilityDays = yield Availability_1.default.create(Object.assign(Object.assign({}, availability), { creator: req.userId }));
    const dogsitter = yield DogSitter_1.default.create({
        name: user.name,
        email: user.email,
        password: user.password,
        isAvailable: isAvailable,
        imageGallery: user.imageGallery,
        payments: user.payments,
        availability: availabilityDays._id,
        price: price,
    });
    yield BaseUser_1.default.findByIdAndDelete(req.userId);
    const token = (0, generateToken_1.default)(dogsitter._id);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600 * 1000,
    });
    res.status(201).json({
        success: {
            user: {
                _id: dogsitter._id,
                name: dogsitter.name,
                email: dogsitter.email,
                isAvailable: dogsitter.isAvailable,
                isDogsitter: dogsitter.isDogsitter,
                imageGallery: dogsitter.imageGallery,
                payments: dogsitter.payments,
                availability: availabilityDays,
                price: dogsitter.price,
            },
        },
    });
}));
exports.loginUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = (yield BaseUser_1.default.findOne({ email })) ||
        (yield DogSitter_1.default.findOne({ email }));
    if (!user) {
        throw new customError_1.StatusError("A user with this email was not found.", 422);
    }
    const isEqual = user.matchPassword(password);
    console.log(isEqual);
    if (!isEqual) {
        throw new customError_1.StatusError("Invalid email or password.", 422);
    }
    const token = (0, generateToken_1.default)(user._id);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600 * 1000,
    });
    const authUser = !user.isDogsitter
        ? {
            _id: user._id,
            email: user.email,
            name: user.name,
            imageGallery: user.imageGallery,
            payments: user.payments,
            isDogsitter: user.isDogsitter,
        }
        : {
            _id: user._id,
            email: user.email,
            name: user.name,
            imageGallery: user.imageGallery,
            payments: user.payments,
            isAvailable: user.isAvailable,
            isDogsitter: user.isDogsitter,
            availability: user.availability,
        };
    res.status(200).json({
        success: {
            user: Object.assign({}, authUser),
        },
    });
}));
exports.loadUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = (yield BaseUser_1.default.findById(req.userId)) ||
        (yield DogSitter_1.default.findById(req.userId).populate("availability"));
    let authUser;
    if (user) {
        authUser = !user.isDogsitter
            ? {
                _id: user._id,
                email: user.email,
                name: user.name,
                imageGallery: user.imageGallery,
                payments: user.payments,
                isDogsitter: user.isDogsitter,
            }
            : {
                _id: user._id,
                email: user.email,
                name: user.name,
                imageGallery: user.imageGallery,
                payments: user.payments,
                isAvailable: user.isAvailable,
                isDogsitter: user.isDogsitter,
                availability: user.availability,
            };
    }
    res.status(200).json({
        success: {
            user: Object.assign({}, authUser),
        },
    });
}));
