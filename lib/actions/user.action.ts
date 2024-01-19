import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function verifyAuthToken({ token }: { token: string }) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET!);
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
