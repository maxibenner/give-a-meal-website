// import { initAdminApp } from "@/lib/firebaseAdmin";
// import { supabaseService } from "@/lib/supabase";
// import { auth } from "firebase-admin";
// import { NextRequest, NextResponse } from "next/server";

// initAdminApp();

// export async function POST(request: NextRequest) {
//   try {
//     const session = request.cookies.get("session");

//     if (session) {
//       const decodedToken = await auth().verifySessionCookie(
//         session.value,
//         true
//       );
//       const uid = decodedToken.uid;
//       const email = decodedToken.email;
//       const formData = await request.body.json();

//       const res = await supabaseService
//         .from("profiles")
//         .update({ first_name: formData.name })
//         .eq("auth_id", uid);

//       if (res.error) {
//         throw new Error("Error updating profile name");
//       }

//       revalidatePath(`/${rawFormData.lang}/donors/profile`);
//       redirect(`/${rawFormData.lang}/donors/profile`);

//       return NextResponse.json({ email: email, uid: uid }, { status: 200 });
//     }
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 403 });
//   }

//   return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
// }
