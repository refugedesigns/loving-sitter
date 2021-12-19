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
exports.loadUser = exports.loginUser = exports.registerUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const BaseUser_1 = __importDefault(require("../models/BaseUser"));
const customError_1 = require("../customError");
const generateToken_1 = __importDefault(require("../utils/generateToken"));
exports.registerUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    // if (user) {
    //   const token = generateToken(user._id);
    //   res.cookie("token", token, {
    //     httpOnly: true,
    //     maxAge: 3600 * 1000,
    //   });
    // }
    res.status(201).json({
        success: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        },
    });
}));
exports.loginUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield BaseUser_1.default.findOne({ email });
    if (!user) {
        throw new customError_1.StatusError("A user with this email was not found.", 422);
    }
    const isEqual = yield user.matchPassword(password);
    if (!isEqual) {
        throw new customError_1.StatusError("Invalid email or password.", 422);
    }
    const token = (0, generateToken_1.default)(user._id);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600 * 1000,
    });
    res.status(200).json({
        success: {
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                imageGallery: user.imageGallery,
                payments: user.payments
            },
        },
    });
}));
exports.loadUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield BaseUser_1.default.findById(id);
    res.status(200).json(user);
}));
