export default function LaunchChecklistPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Launch Checklist</h1>
      <p className="text-gray-500 mb-8">Track your progress towards launching your Modern Onboard platform.</p>

      <div className="grid gap-4">
        {/* Static checklist items */}
        {[
          "Set up company profile",
          "Configure departments",
          "Add team members",
          "Set up onboarding workflows",
          "Configure integrations",
          "Set up document templates",
          "Test employee onboarding process",
          "Configure notifications",
          "Set up reporting",
          "Review security settings",
        ].map((item, index) => (
          <div key={index} className="flex items-center p-4 border rounded-lg">
            <div className="h-5 w-5 border rounded mr-3 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">Note: Interactive checklist functionality will be available after deployment.</p>
      </div>
    </div>
  )
}
