import type { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jwt/jwt";
import AppError from "../module/error.module";
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      throw new AppError(
        "authorization header missing",
        "AUTH_HEADER_MISSING",
        401
      );
    }
    const jwtToken = authHeader.toString().split(" ").length === 2 ? authHeader.toString().split(" ")[1] : authHeader.toString().split(" ")[1];
    const jwtData = await jwtVerify(String(jwtToken));
    (req as any).userData = jwtData;
    next();
        
    } 
    catch (err) {
        throw new AppError(
            "invalid authorization token",
            "INVALID_TOKEN",
            401
        );
    }
};