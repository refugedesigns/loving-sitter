"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conversations_1 = require("../controllers/conversations");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.route("/").post(auth_1.default, conversations_1.createConversation);
router.route("/user/:userId").get(auth_1.default, conversations_1.getRecipient);
router.route("/:userId").get(auth_1.default, conversations_1.getConversation);
exports.default = router;
