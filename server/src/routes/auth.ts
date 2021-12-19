import { Router } from "express";
import { registerUser, loadUser, loginUser } from "../controllers/auth";
import { validateRegister, validateLogin } from "../validate";
import  protect  from '../middleware/auth'

const router = Router();

router.route("/signup").post(validateRegister, registerUser);

router.route("/login").post(validateLogin, loginUser)

router.route("/user/:id").get(protect, loadUser)

// router.route("/logout").delete()

export default router;
