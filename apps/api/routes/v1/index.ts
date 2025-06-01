import { Router } from "express";
import { router as userRouter } from "./users";
import { router as websiteRouter } from "./website";
export const router = Router();
router.use("/user", userRouter);
router.use("/website", websiteRouter);
