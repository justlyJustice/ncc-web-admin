import { NextResponse, NextRequest } from "next/server";

export default function middleware(req: NextRequest, res) {
  const { nextUrl } = req;

  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(`${nextUrl.origin}/sign-in`);
  }

  return NextResponse.next();
}
