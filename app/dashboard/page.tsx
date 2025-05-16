import Link from "next/link"
import Image from "next/image"
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  Calendar,
  Bell,
  BarChart3,
  Briefcase,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back! Here's an overview of your organization.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link href="/dashboard/employees/create" className="button-primary py-2 px-4 text-sm">
            Add Employee
          </Link>
          <Link href="/dashboard/reports" className="button-secondary py-2 px-4 text-sm">
            View Reports
          </Link>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-primary bg-opacity-10 rounded-full p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">248</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">12%</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-secondary bg-opacity-10 rounded-full p-3">
              <CheckCircle className="h-6 w-6 text-secondary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Onboarded</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">8%</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-accent bg-opacity-20 rounded-full p-3">
              <Clock className="h-6 w-6 text-gray-700" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-red-600">
              <ArrowDown className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">3%</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-primary bg-opacity-10 rounded-full p-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Documents</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-green-600">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">24%</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent activity */}
        <div className="lg:col-span-2">
          <div className="card-modern">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
              <Link href="/dashboard/activity" className="text-sm text-primary hover:text-primary-dark">
                View all
              </Link>
            </div>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">New employee onboarded</p>
                  <p className="text-sm text-gray-500">Sarah Johnson completed onboarding</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Document signed</p>
                  <p className="text-sm text-gray-500">Michael Brown signed the NDA document</p>
                  <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Onboarding scheduled</p>
                  <p className="text-sm text-gray-500">New onboarding session scheduled for David Wilson</p>
                  <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Compliance alert</p>
                  <p className="text-sm text-gray-500">3 employees have documents expiring soon</p>
                  <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming onboarding */}
        <div>
          <div className="card-modern">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Upcoming Onboarding</h2>
              <Link href="/dashboard/onboarding" className="text-sm text-primary hover:text-primary-dark">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">James Davis</p>
                  <p className="text-xs text-gray-500">Software Engineer</p>
                </div>
                <div className="text-xs text-gray-500">Tomorrow</div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-medium">
                    AT
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">Anna Thompson</p>
                  <p className="text-xs text-gray-500">Product Manager</p>
                </div>
                <div className="text-xs text-gray-500">Jun 15</div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    RL
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">Robert Lee</p>
                  <p className="text-xs text-gray-500">UX Designer</p>
                </div>
                <div className="text-xs text-gray-500">Jun 18</div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/dashboard/onboarding/create"
                className="block text-center py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
              >
                Schedule New Onboarding
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="card-modern mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Quick Links</h2>
              <Image src="/images/modern-icon.png" alt="Modern Icon" width={30} height={30} className="h-6 w-auto" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/dashboard/documents"
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <FileText className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs text-gray-700">Documents</span>
              </Link>
              <Link
                href="/dashboard/reports"
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <BarChart3 className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs text-gray-700">Reports</span>
              </Link>
              <Link
                href="/dashboard/employees"
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Users className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs text-gray-700">Employees</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Briefcase className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs text-gray-700">Company</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
