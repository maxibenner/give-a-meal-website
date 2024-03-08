import { initAdminApp } from "@/lib/firebaseAdmin";
import { auth } from "firebase-admin";
import { NextRequest, NextResponse } from "next/server";

initAdminApp();

export async function GET(request: NextRequest) {
  try {
    const session = request.cookies.get("session");
    if (session) {
      const decodedToken = await auth().verifySessionCookie(
        session.value,
        true
      );
      const uid = decodedToken.uid;
      const email = decodedToken.email;

      return NextResponse.json({ email: email, uid: uid }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Not auhtorized" }, { status: 403 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 403 });
  }
}
