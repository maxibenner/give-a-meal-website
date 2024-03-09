import { initAdminApp } from "@/lib/firebaseAdmin";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

initAdminApp();

export async function GET(request: NextRequest) {
  const session = cookies().get("session");

  if (session) {
    try {
      const decodedToken = await auth().verifySessionCookie(
        session.value,
        true
      );
      const uid = decodedToken.uid;
      const email = decodedToken.email;

      return NextResponse.json({ email: email, uid: uid }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
  }
}