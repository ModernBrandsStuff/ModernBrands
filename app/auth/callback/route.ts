import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    if (code) {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

      // Exchange the code for a session
      await supabase.auth.exchangeCodeForSession(code)
    }

    // Get the site URL from environment variable or use modernonboard.com as fallback
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modernonboard.com"

    // Redirect to the dashboard
    return NextResponse.redirect(new URL("/dashboard", siteUrl))
  } catch (error) {
    console.error("Error in auth callback:", error)
    return NextResponse.redirect(new URL("/login?error=Something%20went%20wrong", request.url))
  }
}
