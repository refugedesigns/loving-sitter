"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const protect = (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
        return res.status(401).send("No token, authorization denied.");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
    }
    catch (error) {
        res.status(401).send("Invalid token.");
    }
    next();
};
exports.default = protect;
