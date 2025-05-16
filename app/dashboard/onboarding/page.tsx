import Link from "next/link"
import { ArrowLeft, Plus, Search, Filter } from "lucide-react"

export default function OnboardingPage() {
  // Mock onboarding data
  const onboardings = [
    {
      id: 1,
      name: "James Davis",
      position: "Software Engineer",
      department: "Engineering",
      startDate: "Jun 14, 2023",
      status: "Scheduled",
    },
    {
      id: 2,
      name: "Anna Thompson",
      position: "Product Manager",
      department: "Product",
      startDate: "Jun 15, 2023",
      status: "Scheduled",
    },
    {
      id: 3,
      name: "Robert Lee",
      position: "UX Designer",
      department: "Design",
      startDate: "Jun 18, 2023",
      status: "Scheduled",
    },
    {
      id: 4,
      name: "Emily Wilson",
      position: "Marketing Specialist",
      department: "Marketing",
      startDate: "Jun 20, 2023",
      status: "Scheduled",
    },
    {
      id: 5,
      name: "Michael Brown",
      position: "Sales Representative",
      department: "Sales",
      startDate: "Jun 25, 2023",
      status: "Scheduled",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center">
          <Link href="/dashboard" className="text-foreground opacity-60 hover:text-primary mr-4">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Onboarding</h1>
            <p className="text-foreground opacity-60">Manage employee onboarding processes</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/dashboard/onboarding/schedule" className="button-primary flex items-center">
            <Plus size={18} className="mr-2" /> Schedule Onboarding
          </Link>
        </div>
      </div>

      <div className="card-modern mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-foreground opacity-40" />
            </div>
            <input
              type="text"
              placeholder="Search onboarding..."
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-md text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>
          <button className="px-4 py-2 border border-border rounded-md text-foreground flex items-center justify-center hover:bg-card">
            <Filter size={18} className="mr-2" /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Position</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Department</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Start Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Status</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-foreground opacity-60">Actions</th>
            </tr>
          </thead>
          <tbody>
            {onboardings.map((onboarding) => (
              <tr key={onboarding.id} className="border-b border-border hover:bg-card">
                <td className="px-4 py-4 text-sm text-foreground">{onboarding.name}</td>
                <td className="px-4 py-4 text-sm text-foreground">{onboarding.position}</td>
                <td className="px-4 py-4 text-sm text-foreground">{onboarding.department}</td>
                <td className="px-4 py-4 text-sm text-foreground">{onboarding.startDate}</td>
                <td className="px-4 py-4 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 bg-opacity-20 text-blue-400">
                    {onboarding.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-right">
                  <Link
                    href={`/dashboard/onboarding/${onboarding.id}`}
                    className="text-primary hover:text-primary-dark"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
