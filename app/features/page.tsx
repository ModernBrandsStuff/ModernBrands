import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card bg-opacity-80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/modern-logo.png" alt="Modern" width={180} height={60} className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="nav-link-active">
                Features
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/login" className="button-secondary py-2 px-4">
                Sign in
              </Link>
              <Link href="/signup" className="button-primary py-2 px-4">
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground hover:text-primary">
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for <span className="gradient-text">Modern</span> HR Teams
            </h1>
            <p className="text-xl text-foreground opacity-80 mb-8">
              Discover how our platform streamlines employee lifecycle management from onboarding to offboarding.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Streamlined Employee Onboarding</h2>
              <p className="text-lg text-foreground opacity-80 mb-6">
                Create personalized onboarding experiences that help new hires feel welcome and productive from day one.
                Automate paperwork, assign tasks, and track progress all in one place.
              </p>
              <ul className="space-y-3">
                {[
                  "Customizable onboarding workflows",
                  "Automated document collection",
                  "Task assignment and tracking",
                  "Progress dashboards",
                  "New hire welcome portals",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/employee-onboarding-dashboard.png"
                alt="Onboarding Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/document-management-system.png"
                alt="Document Management"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Intelligent Document Management</h2>
              <p className="text-lg text-foreground opacity-80 mb-6">
                Securely store, manage, and track all employee documents in one centralized location. Ensure compliance
                with automated expiration reminders and version control.
              </p>
              <ul className="space-y-3">
                {[
                  "Centralized document repository",
                  "Automated document generation",
                  "E-signature integration",
                  "Document expiration tracking",
                  "Compliance monitoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Workflow Automation</h2>
              <p className="text-lg text-foreground opacity-80 mb-6">
                Automate repetitive tasks and workflows to save time and reduce administrative burden. Create custom
                workflows for any HR process.
              </p>
              <ul className="space-y-3">
                {[
                  "Visual workflow builder",
                  "Conditional logic and branching",
                  "Automated notifications",
                  "Approval processes",
                  "Integration with other systems",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/workflow-automation-diagram.png"
                alt="Workflow Automation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">More Powerful Features</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              Modern Onboard offers a comprehensive suite of tools to manage your entire employee lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compliance Management",
                description:
                  "Stay compliant with automated tracking of certifications, training, and regulatory requirements.",
                icon: "🛡️",
              },
              {
                title: "Performance Tracking",
                description: "Set goals, track progress, and provide feedback to help employees grow and succeed.",
                icon: "📈",
              },
              {
                title: "Analytics & Reporting",
                description: "Gain insights into your workforce with powerful analytics and customizable reports.",
                icon: "📊",
              },
              {
                title: "Employee Self-Service",
                description: "Empower employees to update their information and access documents on their own.",
                icon: "👤",
              },
              {
                title: "Integration Ecosystem",
                description: "Connect with your existing HR tools and systems for a seamless experience.",
                icon: "🔄",
              },
              {
                title: "Mobile Access",
                description: "Access your HR platform anytime, anywhere with our mobile-friendly design.",
                icon: "📱",
              },
            ].map((feature, index) => (
              <div key={index} className="card-modern">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground opacity-80">{feature.description}</p>
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
              Join leading companies using Modern to streamline their HR processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all flex items-center justify-center"
              >
                Schedule a Demo <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/modern-logo.png" alt="Modern" width={150} height={50} className="h-8 w-auto" />
              </Link>
              <p className="mt-4 text-foreground opacity-80">
                Streamline your employee lifecycle management with our comprehensive platform.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/features" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="text-foreground opacity-70 hover:text-primary hover:opacity-100"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/about" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/privacy" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-foreground opacity-70 hover:text-primary hover:opacity-100">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-foreground opacity-60 text-sm">
              &copy; {new Date().getFullYear()} Modern. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
