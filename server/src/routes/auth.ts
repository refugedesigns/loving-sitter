import { Router } from "express";
import { registerUser } from "../controllers/auth";
import { validateRegister } from "../validate";

const router = Router();

router.route("/signup").post(validateRegister, registerUser);

// router.route("/login").post()

// router.route("/user").get()

// router.route("/logout").delete()

export default router;
