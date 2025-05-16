import Link from "next/link"
import Image from "next/image"

export default function SignupPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
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
            <p className="mt-4 text-gray-600">Create your account</p>
          </div>

          {searchParams.error && (
            <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">{searchParams.error}</div>
          )}

          <form action="/api/auth/signup" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input id="name" name="name" type="text" required className="input-modern mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-modern mt-1"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/dashboard" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/dashboard" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <Link href="/dashboard" className="button-primary w-full block text-center">
                Sign up
              </Link>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
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
