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
exports.getRecipient = exports.getConversation = exports.createConversation = void 0;
const Conversation_1 = __importDefault(require("../models/Conversation"));
const DogSitter_1 = __importDefault(require("../models/DogSitter"));
const BaseUser_1 = __importDefault(require("../models/BaseUser"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const customError_1 = require("../customError");
exports.createConversation = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipientId } = req.body;
    const conversation = yield Conversation_1.default.create({
        members: [req.userId, recipientId],
    });
    res.status(201).json({
        success: {
            conversation,
        },
    });
}));
exports.getConversation = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const conversation = yield Conversation_1.default.find({
        members: { $in: [new mongoose_1.default.Types.ObjectId(userId)] },
    });
    if (!conversation) {
        throw new customError_1.StatusError("No conversation for this user", 400);
    }
    res.status(200).json({
        success: [
            ...conversation
        ]
    });
}));
exports.getRecipient = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const recipient = (yield DogSitter_1.default.findById(userId).select("name profilePhoto")) || (yield BaseUser_1.default.findById(userId));
    if (!recipient) {
        throw new customError_1.StatusError("This user is not in the database!", 404);
    }
    res.status(200).json({
        _id: recipient._doc._id,
        name: recipient._doc.name,
        profilePhoto: recipient._doc.profilePhoto
    });
}));
