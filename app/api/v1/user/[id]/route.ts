import User from "@/lib/database/models/user.model";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  context: Context
): Promise<NextResponse> {
  const { id } = context.params;

  const user = await User.findById(id);

  if (!user) return new NextResponse("User not found", { status: 400 });

  return new NextResponse(JSON.stringify(user), { status: 200 });
}
