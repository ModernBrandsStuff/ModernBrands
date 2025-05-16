import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const redirectTo = (formData.get("redirectTo") as string) || "/dashboard"

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Create a Supabase client
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Get the site URL from environment variable or use modernonboard.com as fallback
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modernonboard.com"

    // Sign in the user
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error("Login error:", error.message)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Redirect to the dashboard or the specified redirect URL
    return NextResponse.redirect(new URL(redirectTo, siteUrl), {
      status: 302,
    })
  } catch (error) {
    console.error("Unexpected error during login:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
