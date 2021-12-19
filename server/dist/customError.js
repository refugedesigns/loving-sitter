"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusError = void 0;
class StatusError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.StatusError = StatusError;
