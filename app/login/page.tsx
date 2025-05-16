import Link from "next/link"

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message?: string; error?: string; redirect?: string }
}) {
  const redirectTo = searchParams.redirect || "/dashboard"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-2xl font-bold">Sign in to Modern Onboard</h1>

          {searchParams.message && (
            <div className="mb-4 rounded-md bg-green-50 p-4 text-sm text-green-700">{searchParams.message}</div>
          )}

          {searchParams.error && (
            <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">{searchParams.error}</div>
          )}

          <form action="/api/auth/login" method="POST" className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            {/* Hidden field for redirect */}
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-800">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
