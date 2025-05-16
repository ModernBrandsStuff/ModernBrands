import Link from "next/link"
import { ArrowLeft, Users, FileText, Calendar, Bell, CheckCircle, Clock } from "lucide-react"

export default function ActivityPage() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      type: "employee",
      title: "New employee onboarded",
      description: "Sarah Johnson completed onboarding",
      time: "2 hours ago",
      icon: Users,
    },
    {
      id: 2,
      type: "document",
      title: "Document signed",
      description: "Michael Brown signed the NDA document",
      time: "5 hours ago",
      icon: FileText,
    },
    {
      id: 3,
      type: "calendar",
      title: "Onboarding scheduled",
      description: "New onboarding session scheduled for David Wilson",
      time: "Yesterday",
      icon: Calendar,
    },
    {
      id: 4,
      type: "alert",
      title: "Compliance alert",
      description: "3 employees have documents expiring soon",
      time: "2 days ago",
      icon: Bell,
    },
    {
      id: 5,
      type: "employee",
      title: "Employee status updated",
      description: "Jennifer Lee completed probation period",
      time: "3 days ago",
      icon: CheckCircle,
    },
    {
      id: 6,
      type: "document",
      title: "Document updated",
      description: "Employee handbook version 2.3 published",
      time: "4 days ago",
      icon: FileText,
    },
    {
      id: 7,
      type: "calendar",
      title: "Meeting scheduled",
      description: "Quarterly review meeting scheduled",
      time: "1 week ago",
      icon: Calendar,
    },
    {
      id: 8,
      type: "alert",
      title: "System maintenance",
      description: "System maintenance completed successfully",
      time: "1 week ago",
      icon: Clock,
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-8">
        <Link href="/dashboard" className="text-foreground opacity-60 hover:text-primary mr-4">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Activity Log</h1>
          <p className="text-foreground opacity-60">Track all activities in your organization</p>
        </div>
      </div>

      <div className="card-modern">
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex border-b border-border pb-6 last:border-0 last:pb-0">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <activity.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-foreground opacity-60">{activity.description}</p>
                <p className="text-xs text-foreground opacity-40 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
