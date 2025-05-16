import Link from "next/link"

export default function WelcomePage() {
  // Get the site URL from environment variable or use modernonboard.com as fallback
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://modernonboard.com"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to Modern Onboard</h1>
        <p className="text-gray-500 mb-8">Your employee lifecycle management platform is ready to use.</p>
        <Link href="/dashboard" className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}
