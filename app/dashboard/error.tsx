"use client"

import { useEffect } from "react"

export default function DashboardError({
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
    <div className="container mx-auto py-10">
      <h2 className="text-xl font-bold mb-4 text-foreground">Something went wrong!</h2>
      <p className="text-foreground opacity-60 mb-6">We apologize for the inconvenience.</p>
      <button onClick={reset} className="button-primary">
        Try again
      </button>
    </div>
  )
}
