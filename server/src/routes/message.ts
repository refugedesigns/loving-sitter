import { Router } from "express";
import { getMessages, createMessage, updateMessages } from "../controllers/message"
import protect from "../middleware/auth";

const router = Router()

router.route("/").post(protect, createMessage)

router.route("/").patch(protect, updateMessages)

router.route("/:conversationId").get(protect, getMessages)

export default router