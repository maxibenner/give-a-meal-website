import { initAdminApp } from "@/lib/firebaseAdmin";
import { auth } from "firebase-admin";

initAdminApp();

export async function verifySessionCookie(token: string) {
  try {
    if (token) {
      const decodedToken = await auth().verifySessionCookie(token, true);
      const uid = decodedToken.uid;
      const email = decodedToken.email;

      if (!uid || !email) {
        return null;
      }

      return { email: email, uid: uid };
    }
  } catch (error: any) {
    return null;
  }
}
