"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_1 = require("../controllers/message");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.route("/").post(auth_1.default, message_1.createMessage);
router.route("/:conversationId").get(auth_1.default, message_1.getMessages);
exports.default = router;
