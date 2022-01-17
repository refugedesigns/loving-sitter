import { Router } from "express";
import { registerBaseUser, registerDogsitter, loadUser, loginUser } from "../controllers/auth";
import { validateRegister, validateLogin, validateDogsitter } from "../validate";
import  protect  from '../middleware/auth'

const router = Router();

router.route("/signup").post(validateRegister, registerBaseUser);

router.route("/register-dogsitter").post(validateDogsitter, protect, registerDogsitter)

router.route("/login").post(validateLogin, loginUser)

router.route("/user").get(protect, loadUser)

// router.route("/logout").delete()

export default router;
