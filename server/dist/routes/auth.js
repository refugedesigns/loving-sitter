"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validate_1 = require("../validate");
const auth_2 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.route("/signup").post(validate_1.validateRegister, auth_1.registerBaseUser);
router.route("/register-dogsitter").post(validate_1.validateDogsitter, auth_2.default, auth_1.registerDogsitter);
router.route("/login").post(validate_1.validateLogin, auth_1.loginUser);
router.route("/user").get(auth_2.default, auth_1.loadUser);
// router.route("/logout").delete()
exports.default = router;
