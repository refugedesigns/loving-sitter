"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const notFound = (req, res, next) => {
    next((0, http_errors_1.default)(404));
};
exports.notFound = notFound;
const errorHandler = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
};
exports.errorHandler = errorHandler;
