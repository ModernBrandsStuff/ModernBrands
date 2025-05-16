import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Get the site URL from request origin or use modernonboard.com as fallback
  const siteUrl = request.nextUrl.origin || "https://modernonboard.com"

  // Handle welcome page redirect
  if (request.nextUrl.pathname === "/welcome") {
    return NextResponse.redirect(new URL("/dashboard", siteUrl))
  }

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard") && !session) {
    const redirectUrl = new URL("/login", siteUrl)
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect authenticated users away from login/signup pages
  if ((request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") && session) {
    return NextResponse.redirect(new URL("/dashboard", siteUrl))
  }

  return response
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup", "/welcome"],
}
