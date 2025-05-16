export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-500 mb-8">Manage your Modern Onboard platform settings and configurations.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Launch Checklist",
            description: "Track your progress towards launching your platform",
            href: "/dashboard/admin/launch-checklist",
          },
          {
            title: "System Settings",
            description: "Configure system-wide settings",
            href: "/dashboard/settings",
          },
          {
            title: "User Management",
            description: "Manage users and permissions",
            href: "/dashboard/settings/roles",
          },
          {
            title: "Integrations",
            description: "Configure third-party integrations",
            href: "/dashboard/settings/integrations",
          },
          {
            title: "Branding",
            description: "Customize your platform's branding",
            href: "/dashboard/settings/branding",
          },
          {
            title: "Security",
            description: "Configure security settings",
            href: "/dashboard/settings/security",
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
