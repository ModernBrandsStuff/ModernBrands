import type React from "react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the site URL from environment variable or use modernonboard.com as fallback
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modernonboard.com"

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-xl font-bold">
            Modern Onboard
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/employees" className="hover:underline">
                  Employees
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings" className="hover:underline">
                  Settings
                </Link>
              </li>
              <li>
                <form action="/api/auth/logout" method="POST">
                  <button type="submit" className="hover:underline">
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
