import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Create a Supabase client
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Get the site URL from environment variable or use modernonboard.com as fallback
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modernonboard.com"

    // Sign out the user
    await supabase.auth.signOut()

    // Redirect to the login page
    return NextResponse.redirect(new URL("/login", siteUrl), {
      status: 302,
    })
  } catch (error) {
    console.error("Unexpected error during logout:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
