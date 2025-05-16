import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://modernonboard.com",
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  })
}
