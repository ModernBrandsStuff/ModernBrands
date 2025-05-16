import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/modern-logo.png" alt="Modern" width={180} height={60} className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="nav-link">
                Features
              </Link>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/login" className="button-secondary py-2 px-4">
                Sign in
              </Link>
              <Link href="/signup" className="button-primary py-2 px-4">
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Modern Employee <span className="gradient-text">Onboarding</span> Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamline your employee lifecycle management with our comprehensive platform. Automate workflows,
                ensure compliance, and create exceptional employee experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="button-primary text-center">
                  Get Started Free
                </Link>
                <Link href="/demo" className="button-secondary text-center flex items-center justify-center gap-2">
                  Request Demo <ArrowRight size={18} />
                </Link>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <CheckCircle size={16} className="text-secondary mr-2" />
                <span>No credit card required</span>
                <span className="mx-3">•</span>
                <CheckCircle size={16} className="text-secondary mr-2" />
                <span>14-day free trial</span>
                <span className="mx-3">•</span>
                <CheckCircle size={16} className="text-secondary mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/general-data-dashboard.png"
                  alt="Modern Onboard Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">New employee onboarded</p>
                    <p className="text-sm text-gray-500">Just now</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-20 h-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Image
                  src="/images/modern-icon.png"
                  alt="Modern Icon"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage your workforce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform streamlines the entire employee lifecycle from onboarding to offboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Employee Onboarding",
                description:
                  "Create personalized onboarding experiences that help new hires feel welcome and productive from day one.",
                icon: "👥",
                color: "bg-primary bg-opacity-10",
                textColor: "text-primary",
              },
              {
                title: "Document Management",
                description: "Securely store, manage, and track all employee documents in one centralized location.",
                icon: "📄",
                color: "bg-secondary bg-opacity-10",
                textColor: "text-secondary",
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive tasks and workflows to save time and reduce administrative burden.",
                icon: "⚙️",
                color: "bg-accent bg-opacity-20",
                textColor: "text-gray-700",
              },
              {
                title: "Compliance Management",
                description:
                  "Stay compliant with automated tracking of certifications, training, and regulatory requirements.",
                icon: "🛡️",
                color: "bg-primary bg-opacity-10",
                textColor: "text-primary",
              },
              {
                title: "Performance Tracking",
                description: "Set goals, track progress, and provide feedback to help employees grow and succeed.",
                icon: "📈",
                color: "bg-secondary bg-opacity-10",
                textColor: "text-secondary",
              },
              {
                title: "Analytics & Reporting",
                description: "Gain insights into your workforce with powerful analytics and customizable reports.",
                icon: "📊",
                color: "bg-accent bg-opacity-20",
                textColor: "text-gray-700",
              },
            ].map((feature, index) => (
              <div key={index} className="card-modern staggered-fade-in">
                <div className={`${feature.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-12 text-white text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your employee experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of companies using Modern to streamline their HR processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/modern-logo.png" alt="Modern" width={150} height={50} className="h-8 w-auto" />
              </Link>
              <p className="mt-4 text-gray-600">
                Streamline your employee lifecycle management with our comprehensive platform.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/features" className="text-gray-600 hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-600 hover:text-primary">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-primary">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Modern. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
