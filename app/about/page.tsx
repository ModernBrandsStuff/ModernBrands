import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/about" className="nav-link-active">
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
              About <span className="gradient-text">Modern Onboard</span>
            </h1>
            <p className="text-xl text-foreground opacity-80 mb-8">
              We're on a mission to transform employee lifecycle management for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-foreground opacity-80 mb-6">
                Modern Onboard was founded in 2020 by a team of HR professionals and software engineers who experienced
                firsthand the challenges of employee onboarding and lifecycle management.
              </p>
              <p className="text-lg text-foreground opacity-80 mb-6">
                After years of dealing with fragmented systems, manual processes, and compliance headaches, we decided
                to build the solution we always wished we had: a comprehensive, user-friendly platform that streamlines
                the entire employee lifecycle.
              </p>
              <p className="text-lg text-foreground opacity-80">
                Today, Modern Onboard helps companies of all sizes create exceptional employee experiences while saving
                time, reducing costs, and ensuring compliance.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/diverse-office-team.png"
                alt="Our Team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              These core principles guide everything we do at Modern Onboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Employee-First",
                description:
                  "We believe that great employee experiences lead to better business outcomes. Our platform is designed with the employee journey in mind.",
                icon: "👤",
              },
              {
                title: "Simplicity",
                description:
                  "We're committed to making complex HR processes simple and intuitive for everyone involved.",
                icon: "✨",
              },
              {
                title: "Continuous Innovation",
                description:
                  "We're constantly improving our platform based on customer feedback and emerging HR best practices.",
                icon: "💡",
              },
              {
                title: "Security & Compliance",
                description:
                  "We take the security of your data and regulatory compliance seriously at every level of our organization.",
                icon: "🔒",
              },
              {
                title: "Customer Success",
                description:
                  "Your success is our success. We're dedicated to providing exceptional support and ensuring you get the most value from our platform.",
                icon: "🚀",
              },
              {
                title: "Diversity & Inclusion",
                description:
                  "We believe in creating tools that help companies build diverse, inclusive workplaces where everyone can thrive.",
                icon: "🌈",
              },
            ].map((value, index) => (
              <div key={index} className="card-modern">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground opacity-80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto">
              Meet the experienced professionals leading Modern Onboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO & Co-Founder",
                bio: "Former HR Director with 15+ years of experience in talent management and HR operations.",
                image: "/professional-woman-ceo.png",
              },
              {
                name: "Michael Chen",
                title: "CTO & Co-Founder",
                bio: "Software engineer with a background in building enterprise SaaS platforms for HR and operations.",
                image: "/professional-man-cto.png",
              },
              {
                name: "Aisha Patel",
                title: "Chief Product Officer",
                bio: "Product leader passionate about creating intuitive, user-friendly HR technology solutions.",
                image: "/professional-woman-product-officer.png",
              },
              {
                name: "David Wilson",
                title: "Chief Revenue Officer",
                bio: "Sales leader with extensive experience helping HR teams adopt new technologies.",
                image: "/placeholder-l93o4.png",
              },
              {
                name: "Elena Rodriguez",
                title: "VP of Customer Success",
                bio: "Customer success expert dedicated to helping clients achieve their HR transformation goals.",
                image: "/placeholder.svg?height=300&width=300&query=professional woman customer success",
              },
              {
                name: "James Taylor",
                title: "VP of Engineering",
                bio: "Engineering leader focused on building scalable, secure, and reliable HR platforms.",
                image: "/placeholder.svg?height=300&width=300&query=professional man engineering leader",
              },
            ].map((member, index) => (
              <div key={index} className="card-modern text-center">
                <div className="mb-6 mx-auto rounded-full overflow-hidden w-32 h-32">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.title}</p>
                <p className="text-foreground opacity-80">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl p-12 text-white text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us on our mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ready to transform your employee experience with Modern Onboard?
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
                className="bg-transparent border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Contact Us
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
