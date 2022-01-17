"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dogsitters_1 = require("../controllers/dogsitters");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.route("/").get(dogsitters_1.getAllDogsitters);
router.route("/:id/review").post(auth_1.default, dogsitters_1.postReview);
router.route("/:id").get(dogsitters_1.getDogsitter);
exports.default = router;
