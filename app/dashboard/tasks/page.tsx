import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

export default function TasksPage() {
  // Mock tasks data
  const tasks = [
    {
      id: 1,
      title: "Review new employee applications",
      description: "Review and approve new employee applications for the engineering team",
      priority: "High",
      dueDate: "Today",
      status: "Pending",
    },
    {
      id: 2,
      title: "Update onboarding documentation",
      description: "Update the onboarding documentation with new company policies",
      priority: "Medium",
      dueDate: "Tomorrow",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Schedule quarterly review meetings",
      description: "Schedule quarterly review meetings for all departments",
      priority: "Medium",
      dueDate: "Jun 18",
      status: "Pending",
    },
    {
      id: 4,
      title: "Renew compliance certificates",
      description: "Renew compliance certificates for the company",
      priority: "High",
      dueDate: "Jun 20",
      status: "Pending",
    },
    {
      id: 5,
      title: "Update employee handbook",
      description: "Update the employee handbook with new policies",
      priority: "Low",
      dueDate: "Jun 25",
      status: "Not Started",
    },
    {
      id: 6,
      title: "Review expense reports",
      description: "Review and approve expense reports for the month",
      priority: "Medium",
      dueDate: "Jun 30",
      status: "Not Started",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-8">
        <Link href="/dashboard" className="text-foreground opacity-60 hover:text-primary mr-4">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <p className="text-foreground opacity-60">Manage your tasks and deadlines</p>
        </div>
      </div>

      <div className="card-modern">
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div
                    className={`h-3 w-3 rounded-full mr-3 ${
                      task.priority === "High"
                        ? "bg-red-400"
                        : task.priority === "Medium"
                          ? "bg-yellow-400"
                          : "bg-green-400"
                    }`}
                  ></div>
                  <h3 className="text-lg font-medium text-foreground">{task.title}</h3>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      task.status === "Pending"
                        ? "bg-yellow-400 bg-opacity-20 text-yellow-400"
                        : task.status === "In Progress"
                          ? "bg-blue-400 bg-opacity-20 text-blue-400"
                          : task.status === "Completed"
                            ? "bg-green-400 bg-opacity-20 text-green-400"
                            : "bg-gray-400 bg-opacity-20 text-gray-400"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
              <p className="text-sm text-foreground opacity-60 mb-3">{task.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock size={16} className="text-foreground opacity-60 mr-1" />
                  <span className="text-sm text-foreground opacity-60">Due: {task.dueDate}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary-dark">
                    Start
                  </button>
                  <button className="px-3 py-1 text-xs border border-border text-foreground rounded-md hover:bg-card">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
