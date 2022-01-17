import { Router } from "express";
import {
  getAllDogsitters,
  getDogsitter,
  postReview,
} from "../controllers/dogsitters";
import protect from "../middleware/auth";

const router = Router();

router.route("/").get(getAllDogsitters);

router.route("/:id/review").post(protect, postReview);

router.route("/:id").get(getDogsitter);

export default router;
