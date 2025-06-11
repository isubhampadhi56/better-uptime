import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET || "s3cr3t";

export interface JwtPayload {
  userId: string;
  username: string;
  iat?: number;
  exp?: number;
}
export async function createJwtToken(jwtBody: JwtPayload) {
  const jwtObj = {
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24),
    ...jwtBody,
  };
  const token = jwt.sign(jwtObj, jwtSecret);
  return token;
}

export async function jwtVerify(token: string) {
  try {
    return (await jwt.verify(token, jwtSecret)) as JwtPayload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
