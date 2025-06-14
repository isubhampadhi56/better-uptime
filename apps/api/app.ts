import express, { type NextFunction } from "express"
import type { Request, Response } from "express-serve-static-core"
import { router as v1Router } from "./routes/v1/index"
import AppError from "./module/error.module";
import { ZodError } from "zod";
import cors from "cors";
export const app = express();
app.use(cors());
app.use(express.json());
app.use("/v1",v1Router)
app.use(function (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error(error);
  
  // Handle AppError instances
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ 
      error: error.code, 
      message: error.message 
    });
    return;
  }

  // Handle ZodError instances
  if (error instanceof ZodError) {
    res.status(400).json({
      error: "VALIDATION_ERROR",
      message: error.errors[0]?.message || "Invalid request data"
    });
    return;
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    res.status(500).json({
      error: "INTERNAL_ERROR",
      message: error.message || "Internal server error"
    });
    return;
  }

  // Fallback for unknown error types
  res.status(500).json({
    error: "UNKNOWN_ERROR",
    message: "An unexpected error occurred"
  });
  return;
});
