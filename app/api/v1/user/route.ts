import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  await connectToDatabase();

  // get all the users
  const users = await User.find({});

  if (!users) {
    return new NextResponse("There is not users", { status: 400 });
  }

  return new NextResponse(JSON.stringify(users), { status: 200 });
}
