import Link from "next/link"
import { Settings, Shield, Users, Bell, Globe, Palette, Key } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Settings</h1>
      <p className="text-foreground opacity-60 mb-8">Configure your Modern Onboard platform settings.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "General Settings",
            description: "Configure basic platform settings",
            icon: Settings,
            href: "/dashboard/settings/general",
          },
          {
            title: "User Management",
            description: "Manage users and permissions",
            icon: Users,
            href: "/dashboard/settings/users",
          },
          {
            title: "Email Access Control",
            description: "Control which emails can register",
            icon: Shield,
            href: "/dashboard/admin/email-access",
          },
          {
            title: "Notifications",
            description: "Configure notification settings",
            icon: Bell,
            href: "/dashboard/settings/notifications",
          },
          {
            title: "Appearance",
            description: "Customize the platform appearance",
            icon: Palette,
            href: "/dashboard/settings/appearance",
          },
          {
            title: "API Keys",
            description: "Manage API keys and integrations",
            icon: Key,
            href: "/dashboard/settings/api-keys",
          },
          {
            title: "Localization",
            description: "Language and regional settings",
            icon: Globe,
            href: "/dashboard/settings/localization",
          },
        ].map((item, index) => (
          <Link key={index} href={item.href} className="card-modern hover:border-primary transition-colors">
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground opacity-60">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
