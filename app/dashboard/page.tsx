export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome to Modern Onboard. Manage your employee lifecycle from one place.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Employees",
            description: "Manage your employees",
            href: "/dashboard/employees",
          },
          {
            title: "Onboarding",
            description: "Set up and manage onboarding workflows",
            href: "/dashboard/onboarding",
          },
          {
            title: "Documents",
            description: "Manage documents and templates",
            href: "/dashboard/documents",
          },
          {
            title: "Settings",
            description: "Configure your platform settings",
            href: "/dashboard/settings",
          },
          {
            title: "Reports",
            description: "View and generate reports",
            href: "/dashboard/reports",
          },
          {
            title: "Admin",
            description: "Access admin features",
            href: "/dashboard/admin",
          },
        ].map((item, index) => (
          <a key={index} href={item.href} className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
