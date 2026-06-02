import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "locale";

function detectLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || "";

  const shouldUseGerman =
    acceptLanguage.includes("de-DE") ||
    acceptLanguage.includes("de-AT") ||
    acceptLanguage.includes("de-CH") ||
    acceptLanguage.startsWith("de");

  return shouldUseGerman ? "de" : "en";
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const existingLocale = request.cookies.get(COOKIE_NAME)?.value;

  if (!existingLocale) {
    const locale = detectLocale(request);

    response.cookies.set(COOKIE_NAME, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
