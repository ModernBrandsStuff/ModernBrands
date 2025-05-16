import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const name = formData.get("name") as string

    // Basic validation
    if (!email || !password || !name) {
      return NextResponse.json({ error: "Email, password, and name are required" }, { status: 400 })
    }

    // Create a Supabase client
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Check if the email is allowed
    const { data: isAllowed, error: checkError } = await supabase.rpc("is_email_allowed", { email_to_check: email })

    if (checkError) {
      console.error("Error checking email:", checkError.message)
      return NextResponse.json({ error: "Error checking email permissions" }, { status: 500 })
    }

    if (!isAllowed) {
      return NextResponse.json({ error: "This email domain is not authorized to register" }, { status: 403 })
    }

    // Always use modernonboard.com as the site URL for email redirects
    const siteUrl = "https://modernonboard.com"

    // Sign up the user with the correct site URL
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: `${siteUrl}/auth/callback`,
      },
    })

    if (error) {
      console.error("Signup error:", error.message)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Redirect to login page with success message
    const redirectUrl = new URL("/login", request.url)
    redirectUrl.searchParams.set("message", "Check your email to confirm your account")

    return NextResponse.redirect(redirectUrl, {
      status: 302,
    })
  } catch (error) {
    console.error("Unexpected error during signup:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
