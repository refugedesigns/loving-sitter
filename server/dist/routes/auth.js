"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validate_1 = require("../validate");
const router = (0, express_1.Router)();
router.route("/signup").post(validate_1.validateRegister, auth_1.registerUser);
// router.route("/login").post()
// router.route("/user").get()
// router.route("/logout").delete()
exports.default = router;
