import Link from "next/link"
import { ArrowLeft, CheckCircle, AlertCircle, Info } from "lucide-react"

export default function NotificationsPage() {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "New employee onboarded",
      message: "Sarah Johnson has completed the onboarding process.",
      time: "2 hours ago",
      type: "success",
      read: false,
    },
    {
      id: 2,
      title: "Document expiring soon",
      message: "3 employee documents are expiring in the next 7 days.",
      time: "5 hours ago",
      type: "warning",
      read: false,
    },
    {
      id: 3,
      title: "Meeting reminder",
      message: "You have a quarterly review meeting scheduled for tomorrow at 10:00 AM.",
      time: "Yesterday",
      type: "info",
      read: true,
    },
    {
      id: 4,
      title: "System maintenance",
      message: "The system will be undergoing maintenance on June 15th from 2:00 AM to 4:00 AM.",
      time: "2 days ago",
      type: "info",
      read: true,
    },
    {
      id: 5,
      title: "New feature available",
      message: "The document generation feature is now available in your account.",
      time: "3 days ago",
      type: "success",
      read: true,
    },
    {
      id: 6,
      title: "Compliance alert",
      message: "Your company's compliance certificate is expiring in 30 days.",
      time: "1 week ago",
      type: "warning",
      read: true,
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-8">
        <Link href="/dashboard" className="text-foreground opacity-60 hover:text-primary mr-4">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-foreground opacity-60">Stay updated with important information</p>
        </div>
      </div>

      <div className="card-modern">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-foreground">All Notifications</h2>
          <button className="text-sm text-primary hover:text-primary-dark">Mark all as read</button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border ${notification.read ? "border-border" : "border-primary"} rounded-lg relative`}
            >
              {!notification.read && <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary"></div>}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      notification.type === "success"
                        ? "bg-green-400 bg-opacity-10"
                        : notification.type === "warning"
                          ? "bg-yellow-400 bg-opacity-10"
                          : "bg-blue-400 bg-opacity-10"
                    }`}
                  >
                    {notification.type === "success" ? (
                      <CheckCircle
                        className={`h-5 w-5 ${
                          notification.type === "success"
                            ? "text-green-400"
                            : notification.type === "warning"
                              ? "text-yellow-400"
                              : "text-blue-400"
                        }`}
                      />
                    ) : notification.type === "warning" ? (
                      <AlertCircle
                        className={`h-5 w-5 ${
                          notification.type === "success"
                            ? "text-green-400"
                            : notification.type === "warning"
                              ? "text-yellow-400"
                              : "text-blue-400"
                        }`}
                      />
                    ) : (
                      <Info
                        className={`h-5 w-5 ${
                          notification.type === "success"
                            ? "text-green-400"
                            : notification.type === "warning"
                              ? "text-yellow-400"
                              : "text-blue-400"
                        }`}
                      />
                    )}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-foreground">{notification.title}</p>
                  <p className="text-sm text-foreground opacity-60">{notification.message}</p>
                  <p className="text-xs text-foreground opacity-40 mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
