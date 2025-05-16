import Link from "next/link"
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
  ChevronRight,
  Activity,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-foreground opacity-60">
            Welcome back! Here's an overview of your organization.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link href="/dashboard/employees" className="button-primary py-2 px-4 text-sm">
            Add Employee
          </Link>
          <Link href="/dashboard/documents" className="button-secondary py-2 px-4 text-sm">
            View Documents
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
              <p className="text-sm font-medium text-foreground opacity-60">Total Employees</p>
              <p className="text-2xl font-bold text-foreground">248</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-green-400">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">12%</span>
            </div>
            <span className="text-xs text-foreground opacity-60 ml-2">from last month</span>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-secondary bg-opacity-10 rounded-full p-3">
              <CheckCircle className="h-6 w-6 text-secondary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-foreground opacity-60">Onboarded</p>
              <p className="text-2xl font-bold text-foreground">18</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-green-400">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">8%</span>
            </div>
            <span className="text-xs text-foreground opacity-60 ml-2">from last month</span>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-accent bg-opacity-20 rounded-full p-3">
              <Clock className="h-6 w-6 text-foreground" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-foreground opacity-60">In Progress</p>
              <p className="text-2xl font-bold text-foreground">7</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-red-400">
              <ArrowDown className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">3%</span>
            </div>
            <span className="text-xs text-foreground opacity-60 ml-2">from last month</span>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center">
            <div className="bg-primary bg-opacity-10 rounded-full p-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-foreground opacity-60">Documents</p>
              <p className="text-2xl font-bold text-foreground">156</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center text-green-400">
              <ArrowUp className="h-4 w-4" />
              <span className="text-xs font-medium ml-1">24%</span>
            </div>
            <span className="text-xs text-foreground opacity-60 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Main content - Replacing the chart with a cleaner design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent activity */}
        <div className="lg:col-span-2">
          <div className="card-modern">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Recent Activity</h2>
              <Link
                href="/dashboard/activity"
                className="text-sm text-primary hover:text-primary-dark flex items-center"
              >
                View all <ChevronRight size={16} className="ml-1" />
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
                  <p className="text-sm font-medium text-foreground">New employee onboarded</p>
                  <p className="text-sm text-foreground opacity-60">Sarah Johnson completed onboarding</p>
                  <p className="text-xs text-foreground opacity-40 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Document signed</p>
                  <p className="text-sm text-foreground opacity-60">Michael Brown signed the NDA document</p>
                  <p className="text-xs text-foreground opacity-40 mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-foreground" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Onboarding scheduled</p>
                  <p className="text-sm text-foreground opacity-60">
                    New onboarding session scheduled for David Wilson
                  </p>
                  <p className="text-xs text-foreground opacity-40 mt-1">Yesterday</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-secondary" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">Compliance alert</p>
                  <p className="text-sm text-foreground opacity-60">3 employees have documents expiring soon</p>
                  <p className="text-xs text-foreground opacity-40 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks section - Clean, modern replacement for the chart */}
          <div className="card-modern mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Tasks</h2>
              <Link href="/dashboard/tasks" className="text-sm text-primary hover:text-primary-dark flex items-center">
                View all <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { title: "Review new employee applications", priority: "High", dueDate: "Today" },
                { title: "Update onboarding documentation", priority: "Medium", dueDate: "Tomorrow" },
                { title: "Schedule quarterly review meetings", priority: "Medium", dueDate: "Jun 18" },
                { title: "Renew compliance certificates", priority: "High", dueDate: "Jun 20" },
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center">
                    <div
                      className={`h-3 w-3 rounded-full mr-3 ${
                        task.priority === "High" ? "bg-red-400" : "bg-yellow-400"
                      }`}
                    ></div>
                    <span className="text-foreground">{task.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-foreground opacity-60 mr-4">{task.dueDate}</span>
                    <button className="text-primary hover:text-primary-dark">
                      <Activity size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming onboarding */}
        <div>
          <div className="card-modern">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">Upcoming Onboarding</h2>
              <Link
                href="/dashboard/onboarding"
                className="text-sm text-primary hover:text-primary-dark flex items-center"
              >
                View all <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-foreground">James Davis</p>
                  <p className="text-xs text-foreground opacity-60">Software Engineer</p>
                </div>
                <div className="text-xs text-foreground opacity-60">Tomorrow</div>
              </div>
              <div className="flex items-center p-3 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white font-medium">
                    AT
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-foreground">Anna Thompson</p>
                  <p className="text-xs text-foreground opacity-60">Product Manager</p>
                </div>
                <div className="text-xs text-foreground opacity-60">Jun 15</div>
              </div>
              <div className="flex items-center p-3 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    RL
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-foreground">Robert Lee</p>
                  <p className="text-xs text-foreground opacity-60">UX Designer</p>
                </div>
                <div className="text-xs text-foreground opacity-60">Jun 18</div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/dashboard/onboarding/schedule"
                className="block text-center py-2 border border-border rounded-md text-sm text-foreground hover:bg-card hover:bg-opacity-70"
              >
                Schedule New Onboarding
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="card-modern mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">Quick Links</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/dashboard/documents"
                className="flex flex-col items-center p-3 bg-card border border-border rounded-lg hover:bg-primary hover:bg-opacity-5"
              >
                <FileText className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs text-foreground">Documents</span>
              </Link>
              <Link
                href="/dashboard/reports"
                className="flex flex-col items-center p-3 bg-card border border-border rounded-lg hover:bg-primary hover:bg-opacity-5"
              >
                <BarChart3 className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs text-foreground">Reports</span>
              </Link>
              <Link
                href="/dashboard/employees"
                className="flex flex-col items-center p-3 bg-card border border-border rounded-lg hover:bg-primary hover:bg-opacity-5"
              >
                <Users className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs text-foreground">Employees</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex flex-col items-center p-3 bg-card border border-border rounded-lg hover:bg-primary hover:bg-opacity-5"
              >
                <Briefcase className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs text-foreground">Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
