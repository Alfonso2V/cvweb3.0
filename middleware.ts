import { NextResponse, type NextRequest } from "next/server";
import { languages } from "./app/constants";

const locales = languages.map(({ code }) => code);

const getLocale = () => "es-MX";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale_cookie = request.cookies.get("locale");
  if (locale_cookie) {
    request.nextUrl.pathname = `/${locale_cookie.value}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  } else {
    const locale = getLocale();
    request.nextUrl.pathname = `/${locale}${pathname}`;
    const response = NextResponse.redirect(request.nextUrl);
    response.cookies.set("locale", locale);
    return response;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
