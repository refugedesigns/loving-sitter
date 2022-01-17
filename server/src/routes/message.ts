import { Router } from "express";
import { getMessages, createMessage } from "../controllers/message"
import protect from "../middleware/auth";

const router = Router()

router.route("/").post(protect, createMessage)

router.route("/:conversationId").get(protect, getMessages)

export default router