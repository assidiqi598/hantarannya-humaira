import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set("currentPath", req.nextUrl.pathname);
  response.cookies.set("previousPath", req.headers.get("referer") || "/")
  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
