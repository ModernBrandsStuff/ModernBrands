"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/modern-icon-small.png"
              alt="Modern Onboard"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Onboard
            </span>
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
          <button className="md:hidden text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/features" className="nav-link py-2">
                Features
              </Link>
              <Link href="/pricing" className="nav-link py-2">
                Pricing
              </Link>
              <Link href="/about" className="nav-link py-2">
                About
              </Link>
              <div className="pt-2 flex flex-col space-y-3">
                <Link href="/login" className="button-secondary text-center py-2">
                  Sign in
                </Link>
                <Link href="/signup" className="button-primary text-center py-2">
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
