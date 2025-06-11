import { userRepo } from "db/client";
import { pbkdf2Sync, timingSafeEqual, randomBytes } from "node:crypto";
import { z } from "zod";
import AppError from "./error.module";
import { createJwtToken } from "jwt/jwt";
import type { JwtPayload } from "jwt/jwt";
const addUserSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
})
export async function addUser(addUser:any) {
    const addUserReq = await addUserSchema.parseAsync(addUser);
    const salt = randomBytes(16).toString("hex");
  const hashedPassword = pbkdf2Sync(
    addUserReq.password,
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");
  addUserReq.password = `${salt}.${hashedPassword}`;
    const newUser = userRepo.create ({
        username: addUserReq.username,
        password: addUserReq.password,
    });
    const user = await userRepo.save(newUser);
    return {
        userId: user.id,
        username: user.username,
        message: "user created successfully"
    };
}

export async function login(loginReq:any) {
    const loginUserReq = await addUserSchema.parseAsync(loginReq);
    const userDetails = await userRepo.findOne({
        where: {
            username: loginUserReq.username,
        },
    })
    if (!userDetails) {
    throw new AppError("user not found", "INVALID_USER_PASS", 401);
  }
    const [salt, ...others] = userDetails.password.split(".");
    const hash = others.join(".");
    const inputHash = pbkdf2Sync(
        loginReq.password,
        String(salt),
        1000,
        64,
        "sha512"
    ).toString("hex");
    const verifyUser = timingSafeEqual(
        Buffer.from(inputHash, "hex"),
        Buffer.from(hash, "hex")
    );
    if (!verifyUser) {
        throw new AppError("user not found", "INVALID_USER_PASS", 401);
    }
  const jwtBody: JwtPayload = {
    userId: userDetails.id,
    username: userDetails.username,
  };
  const token = await createJwtToken(jwtBody);
  return {
    userId: userDetails.id,
    username: userDetails.username,
    jwtToken: token
  };
}