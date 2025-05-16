import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-foreground opacity-80 mb-8">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-foreground opacity-80 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-foreground opacity-80">info@modernonboard.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-foreground opacity-80">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Office</h3>
                    <p className="text-foreground opacity-80">
                      123 Innovation Way
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden h-64">
                <Image
                  src="/modern-office-building.png"
                  alt="Office Location"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="card-modern">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                      First Name
                    </label>
                    <input type="text" id="firstName" className="input-modern" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                      Last Name
                    </label>
                    <input type="text" id="lastName" className="input-modern" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="input-modern" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                    Company
                  </label>
                  <input type="text" id="company" className="input-modern" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="input-modern" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="input-modern"></textarea>
                </div>

                <div>
                  <button type="submit" className="button-primary w-full">
                    Send Message
                  </button>
                </div>
              </form>
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
              Find answers to common questions about Modern Onboard.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I schedule a demo?",
                answer:
                  "You can schedule a demo by filling out the contact form above or by emailing us directly at demos@modernonboard.com.",
              },
              {
                question: "Do you offer implementation support?",
                answer:
                  "Yes, we offer implementation support for all plans. Our Professional and Enterprise plans include dedicated implementation specialists to help you get set up quickly.",
              },
              {
                question: "How long does implementation typically take?",
                answer:
                  "Implementation time varies depending on your organization's size and needs. Typically, small organizations can be up and running in 1-2 weeks, while larger organizations may take 4-6 weeks.",
              },
              {
                question: "Can I import data from our existing systems?",
                answer:
                  "Yes, we offer data import tools and services to help you migrate from your existing systems. Our team can help you plan and execute a smooth transition.",
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
