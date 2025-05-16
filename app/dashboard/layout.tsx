"use client"

import type React from "react"
import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart,
  FileText,
  Home,
  Settings,
  Shield,
  Users,
  Menu,
  X,
  Bell,
  Search,
  ClipboardList,
  MessageSquare,
  LogOut,
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-5 border-b border-border">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Image src="/images/modern-logo.png" alt="Modern" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <button
              className="lg:hidden text-foreground opacity-80 hover:text-primary"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold text-foreground opacity-60 uppercase tracking-wider">Main</p>
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <Home className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/employees"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <Users className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Employees
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <ClipboardList className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Onboarding
              </Link>
              <Link
                href="/dashboard/documents"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <FileText className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Documents
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <MessageSquare className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Chat
              </Link>
            </div>

            <div className="mt-8 space-y-1">
              <p className="px-3 text-xs font-semibold text-foreground opacity-60 uppercase tracking-wider">Admin</p>
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <Shield className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Compliance
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <BarChart className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Reports
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center px-3 py-2 text-foreground rounded-md hover:bg-primary hover:bg-opacity-10 group"
              >
                <Settings className="h-5 w-5 mr-3 text-foreground opacity-60 group-hover:text-primary group-hover:opacity-100" />
                Settings
              </Link>
            </div>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                  JD
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-foreground">John Doe</p>
                <p className="text-xs text-foreground opacity-60">Administrator</p>
              </div>
              <form action="/api/auth/logout" method="POST" className="ml-auto">
                <button
                  type="submit"
                  className="text-foreground opacity-60 hover:text-red-400 hover:opacity-100"
                  title="Sign out"
                >
                  <LogOut size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center">
              <button
                className="lg:hidden text-foreground opacity-80 hover:text-primary mr-4"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div className="relative max-w-md w-full hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-foreground opacity-40" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2 border border-border rounded-md text-sm placeholder-foreground placeholder-opacity-40 bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-foreground opacity-80 hover:text-primary relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-secondary transform translate-x-1/2 -translate-y-1/2"></span>
              </button>
              <div className="h-8 w-px bg-border hidden md:block"></div>
              <div className="hidden md:flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <span className="ml-2 text-sm font-medium text-foreground">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
