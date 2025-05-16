import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = body.email

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create a Supabase client
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // For now, just return true since we haven't set up the database function yet
    // In a real implementation, we would check if the email is allowed
    return NextResponse.json({ allowed: true })
  } catch (error) {
    console.error("Unexpected error checking email:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
