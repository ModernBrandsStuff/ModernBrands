export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Modern Onboard</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/login" className="hover:underline">
                  Sign in
                </a>
              </li>
              <li>
                <a href="/signup" className="hover:underline">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Modern Onboard Platform</h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your employee lifecycle management with our comprehensive platform.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/signup" className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Get Started
              </a>
              <a href="/login" className="py-2 px-6 border border-gray-300 rounded-md hover:bg-gray-50">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Modern Onboard. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
