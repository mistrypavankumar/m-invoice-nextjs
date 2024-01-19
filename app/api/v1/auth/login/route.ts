import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  await connectToDatabase();

  const { email, password }: RequestBody = await request.json();

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return new NextResponse("Invalid Email or Password", { status: 401 });
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return new NextResponse("Invalid Email or Password");
  }

  const token = user.getJWTToken();

  // Prepare the cookie string
  const cookie = `token=${token}; Path=/; HttpOnly`;

  // Return a NextResponse with the JSON data and set the cookie in the headers
  return new NextResponse(JSON.stringify({ user }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": cookie,
    },
  });
}
