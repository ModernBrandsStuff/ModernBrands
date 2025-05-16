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

    // Always use modernonboard.com as the site URL for redirects
    const siteUrl = "https://modernonboard.com"

    // Redirect to the dashboard
    return NextResponse.redirect(new URL("/dashboard", siteUrl))
  } catch (error) {
    console.error("Error in auth callback:", error)

    // Always use modernonboard.com as the site URL for error redirects
    const siteUrl = "https://modernonboard.com"
    return NextResponse.redirect(new URL(`/login?error=Something%20went%20wrong`, siteUrl))
  }
}
