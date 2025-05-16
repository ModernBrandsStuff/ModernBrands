import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"

export default function PricingPage() {
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
              <Link href="/features" className="nav-link">
                Features
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/pricing" className="nav-link-active">
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-foreground opacity-80 mb-8">
              Choose the plan that's right for your business, with no hidden fees or long-term commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="card-modern relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary rounded-t-xl"></div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-foreground opacity-80 mb-6">Perfect for small teams just getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$12</span>
                <span className="text-foreground opacity-60"> / user / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 25 employees",
                  "Basic onboarding workflows",
                  "Document management",
                  "Email support",
                  "Basic reporting",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block text-center py-2 px-4 border border-primary text-primary rounded-md hover:bg-primary hover:bg-opacity-10 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="card-modern relative border-primary transform scale-105 shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary rounded-t-xl"></div>
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-foreground opacity-80 mb-6">Ideal for growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$24</span>
                <span className="text-foreground opacity-60"> / user / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Up to 100 employees",
                  "Advanced onboarding workflows",
                  "Document management & generation",
                  "Priority email & chat support",
                  "Advanced reporting & analytics",
                  "Compliance management",
                  "API access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block text-center py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="card-modern relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-secondary rounded-t-xl"></div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-foreground opacity-80 mb-6">For large organizations with complex needs</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-foreground opacity-60"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited employees",
                  "Custom onboarding workflows",
                  "Advanced document management",
                  "Dedicated account manager",
                  "Custom reporting & analytics",
                  "Advanced compliance features",
                  "Custom integrations",
                  "SLA guarantees",
                  "On-premise deployment options",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center py-2 px-4 border border-secondary text-secondary rounded-md hover:bg-secondary hover:bg-opacity-10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How does user-based pricing work?",
                answer:
                  "Our pricing is based on the number of active employees in your account. You only pay for employees who are actively using the system, not for archived or inactive employees.",
              },
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes will take effect at the start of your next billing cycle.",
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, Mastercard, American Express) as well as ACH transfers for annual plans.",
              },
              {
                question: "Are there any long-term commitments?",
                answer:
                  "No, our monthly plans can be canceled at any time. We also offer annual plans with a discount for customers who prefer to commit for a year.",
              },
              {
                question: "Do you offer discounts for nonprofits or educational institutions?",
                answer:
                  "Yes, we offer special pricing for qualified nonprofits and educational institutions. Please contact our sales team for more information.",
              },
            ].map((faq, index) => (
              <div key={index} className="card-modern">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground opacity-80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-12 text-white text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of companies using Modern Onboard to streamline their HR processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Start Free Trial
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
