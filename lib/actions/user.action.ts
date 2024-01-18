import { CreateUserParams } from "@/types";
import axios from "axios";

export const createUser = async (user: CreateUserParams) => {
  try {
    const res = await axios.post("/api/v1/auth/register", user);
    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
};
