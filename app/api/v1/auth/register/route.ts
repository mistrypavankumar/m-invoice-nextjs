import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    await connectToDatabase();

    const { name, email, password }: RequestBody = await request.json();

    const newUser = await User.create({ name, email, password });
    const token = newUser.getJWTToken();

    // Prepare the cookie string
    const cookie = `token=${token}; Path=/; HttpOnly`;

    // Return a NextResponse with the JSON data and set the cookie in the headers
    return new NextResponse(JSON.stringify({ name, email, password }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookie,
      },
    });
  } catch (err) {
    const typedError = err as { code?: number };
    let errorMessage: string = "";

    if (typedError.code === 11000) {
      errorMessage = "User already exist!";
    } else {
      errorMessage = "Failed to register!";
    }

    return new NextResponse(JSON.stringify({ error_message: errorMessage }), {
      status: 400,
    });
  }
}
