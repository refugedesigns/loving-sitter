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
exports.updateMessages = exports.getMessages = exports.createMessage = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const Message_1 = __importDefault(require("../models/Message"));
exports.createMessage = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationId, text, recipient } = req.body;
    const message = yield Message_1.default.create({
        conversationId,
        sender: req.userId,
        recipient: recipient,
        text,
    });
    res.status(201).json(message);
}));
exports.getMessages = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationId } = req.params;
    const messages = yield Message_1.default.find({ conversationId: conversationId });
    res.status(200).json({
        success: [...messages],
    });
}));
exports.updateMessages = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { messageIds } = req.body;
    const convertedIds = messageIds.map((id) => new mongoose_1.default.Types.ObjectId(id));
    Promise.all(convertedIds.map((id) => {
        return new Promise((resolve) => {
            Message_1.default.findByIdAndUpdate(id, { read: true }, { new: true }, (err, result) => {
                resolve(result);
            });
        });
    })).then((messages) => {
        res.status(200).json({
            success: messages
        });
    });
}));
