import { NextRequest, NextResponse } from "next/server";
import { initAdminApp } from "@/lib/firebaseAdmin";

initAdminApp();

export async function GET(request: NextRequest) {
  const session = request.cookies.get("session");

  if (session) {
    try {
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.delete("session");
      return response;
    } catch (error: any) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  }
}
