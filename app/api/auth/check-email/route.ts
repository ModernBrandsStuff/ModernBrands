import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create a Supabase client
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // Check if the email is allowed using the database function
    const { data, error } = await supabase.rpc("is_email_allowed", { email_to_check: email })

    if (error) {
      console.error("Error checking email:", error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ allowed: data })
  } catch (error) {
    console.error("Unexpected error checking email:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
