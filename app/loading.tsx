export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-6 animate-pulse" />
        <div className="h-4 w-full bg-gray-200 rounded mb-8 animate-pulse" />
        <div className="h-10 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
      </div>
    </div>
  )
}
