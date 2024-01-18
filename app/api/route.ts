import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Create a simple "Hello, World!" response
  return new NextResponse("Hello, World!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
