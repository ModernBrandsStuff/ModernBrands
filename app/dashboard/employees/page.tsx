import Link from "next/link"
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react"

export default function EmployeesPage() {
  // Mock employee data
  const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@modernonboard.com",
      department: "Engineering",
      position: "Software Engineer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@modernonboard.com",
      department: "Marketing",
      position: "Marketing Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.johnson@modernonboard.com",
      department: "HR",
      position: "HR Specialist",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@modernonboard.com",
      department: "Product",
      position: "Product Manager",
      status: "Onboarding",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@modernonboard.com",
      department: "Engineering",
      position: "Frontend Developer",
      status: "Active",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Employees</h1>
          <p className="text-foreground opacity-60">Manage your organization's employees</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/dashboard/employees/add" className="button-primary flex items-center">
            <Plus size={18} className="mr-2" /> Add Employee
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
              placeholder="Search employees..."
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
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Email</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Department</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Position</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Status</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-foreground opacity-60">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-border hover:bg-card">
                <td className="px-4 py-4 text-sm text-foreground">{employee.name}</td>
                <td className="px-4 py-4 text-sm text-foreground">{employee.email}</td>
                <td className="px-4 py-4 text-sm text-foreground">{employee.department}</td>
                <td className="px-4 py-4 text-sm text-foreground">{employee.position}</td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      employee.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-20 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:bg-opacity-20 dark:text-yellow-400"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-right">
                  <button className="text-foreground opacity-60 hover:text-primary">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-foreground opacity-60">Showing 5 of 5 employees</p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-border rounded-md text-sm text-foreground opacity-60 hover:bg-card">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary text-white rounded-md text-sm">1</button>
          <button className="px-3 py-1 border border-border rounded-md text-sm text-foreground opacity-60 hover:bg-card">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
