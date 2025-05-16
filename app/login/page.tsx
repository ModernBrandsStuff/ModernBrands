import Link from "next/link"
import Image from "next/image"

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message?: string; error?: string; redirect?: string }
}) {
  const redirectTo = searchParams.redirect || "/dashboard"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="card-modern">
          <div className="text-center mb-6">
            <Link href="/">
              <Image
                src="/images/modern-logo.png"
                alt="Modern"
                width={180}
                height={60}
                className="h-12 w-auto mx-auto"
              />
            </Link>
            <p className="mt-4 text-foreground opacity-80">Sign in to your account</p>
          </div>

          {searchParams.message && (
            <div className="mb-4 rounded-md bg-green-900 bg-opacity-20 p-4 text-sm text-green-400">
              {searchParams.message}
            </div>
          )}

          {searchParams.error && (
            <div className="mb-4 rounded-md bg-red-900 bg-opacity-20 p-4 text-sm text-red-400">
              {searchParams.error}
            </div>
          )}

          <form action="/api/auth/login" method="POST" className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-modern mt-1"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <Link href="/dashboard" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-modern mt-1"
                placeholder="••••••••"
              />
            </div>

            {/* Hidden field for redirect */}
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div>
              <button type="submit" className="button-primary w-full">
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-foreground opacity-80">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Image src="/images/modern-icon.png" alt="Modern Icon" width={60} height={60} className="h-12 w-auto" />
        </div>
      </div>
    </div>
  )
}
