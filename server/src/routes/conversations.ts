import { Router } from "express";
import {createConversation, getConversation, getRecipient } from "../controllers/conversations"
import protect from "../middleware/auth";

const router = Router()

router.route("/").post(protect, createConversation)

router.route("/user/:userId").get(protect, getRecipient)

router.route("/:userId").get(protect, getConversation)

export default router