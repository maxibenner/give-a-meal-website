import * as jose from "jose";
import { cookies } from "next/headers";

let publicKeys: any;

async function sessionPublicKeyResolver(protectedHeader: any) {
  const { kid, alg } = protectedHeader;
  if (!publicKeys || !(kid in publicKeys)) {
    publicKeys = await fetch(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys"
    ).then((response) => {
      return response.json();
    });
  }

  // key object was not cached yet
  if (typeof publicKeys[kid] === "string") {
    publicKeys[kid] = await jose.importX509(publicKeys[kid], alg);
  }

  return publicKeys[kid];
}

export default async function getDecodedSessionCookie() {
  // Get the decoded session cookie (JWT)

  // Return null if the cookie doesn't exist or it's invalid
  const sessionCookie = cookies().get("sessionCookie");
  if (sessionCookie === undefined) return null;

  let payload: any;
  let header;

  if (process.env.NODE_ENV === "development") {
    // ONLY IN DEVELOPMENT ENVIRONMENTS
    const verifiedToken = jose.UnsecuredJWT.decode(sessionCookie.value);
    payload = verifiedToken.payload;
    header = verifiedToken.header;
  } else {
    const audience = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const issuer = `https://session.firebase.google.com/${audience}`;

    // https://github.com/panva/jose/discussions/448
    const verifiedToken = await jose.jwtVerify(
      sessionCookie.value,
      sessionPublicKeyResolver,
      {
        issuer,
        audience,
      }
    );
    payload = verifiedToken.payload;
    header = verifiedToken.protectedHeader;
  }

  // Complete the rest of the checks
  // https://firebase.google.com/docs/auth/admin/manage-cookies#verify_session_cookies_using_a_third-party_jwt_library

  // sub (subject) Must be a non-empty string and must be the uid of the user or device.
  if (payload.sub !== payload.user_id) {
    throw new Error("JWT sub does not equal user_id");
  }

  // exp (expiration) must be in the future. The time is measured in seconds since the UNIX epoch.
  // The expiration is set based on the custom duration provided when the cookie is created.
  if (payload.exp <= Date.now() / 1000) {
    throw new Error("JWT exp must be in the future");
  }

  // iat (Issued-at time) Must be in the past.
  // The time is measured in seconds since the UNIX epoch.
  if (payload.iat >= Date.now() / 1000) {
    throw new Error("JWT iat must be in the past");
  }

  // auth_time (Authentication time) Must be in the past. The time when the user authenticated.
  // This matches the auth_time of the ID token used to create the session cookie.
  if (payload.auth_time >= Date.now() / 1000) {
    throw new Error("JWT auth_time must be in the past");
  }

  return payload;
}
