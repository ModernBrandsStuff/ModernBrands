"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">Something went wrong!</h1>
        <p className="text-gray-500 mb-8">We apologize for the inconvenience.</p>
        <button onClick={reset} className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Try again
        </button>
      </div>
    </div>
  )
}
