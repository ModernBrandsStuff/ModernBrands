export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Go Home
        </a>
      </div>
    </div>
  )
}
