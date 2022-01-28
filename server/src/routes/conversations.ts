import { Router } from "express";
import {createConversation, getConversation, getRecipient, getRecipientConv, getConversationById } from "../controllers/conversations"
import protect from "../middleware/auth";

const router = Router()

router.route("/").post(protect, createConversation)

router.route("/recipient/:id").get(protect, getRecipientConv)

router.route("/user/:userId").get(protect, getRecipient)

router.route("/conv/:convId").get(protect, getConversationById)

router.route("/:userId").get(protect, getConversation)

export default router