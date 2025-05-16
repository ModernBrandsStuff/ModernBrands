import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ScheduleOnboardingPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-8">
        <Link href="/dashboard/onboarding" className="text-foreground opacity-60 hover:text-primary mr-4">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Schedule Onboarding</h1>
          <p className="text-foreground opacity-60">Create a new onboarding process for an employee</p>
        </div>
      </div>

      <div className="card-modern">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Employee Name
              </label>
              <input type="text" id="name" className="input-modern" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <input type="email" id="email" className="input-modern" />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-foreground mb-1">
                Position
              </label>
              <input type="text" id="position" className="input-modern" />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-foreground mb-1">
                Department
              </label>
              <select id="department" className="input-modern">
                <option value="">Select Department</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="hr">HR</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-foreground mb-1">
                Start Date
              </label>
              <input type="date" id="startDate" className="input-modern" />
            </div>
            <div>
              <label htmlFor="manager" className="block text-sm font-medium text-foreground mb-1">
                Reporting Manager
              </label>
              <input type="text" id="manager" className="input-modern" />
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1">
              Additional Notes
            </label>
            <textarea id="notes" rows={4} className="input-modern"></textarea>
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="text-lg font-medium text-foreground mb-4">Onboarding Checklist</h3>
            <div className="space-y-3">
              {[
                "Send welcome email",
                "Prepare workstation",
                "Set up accounts and access",
                "Assign onboarding buddy",
                "Schedule orientation",
                "Prepare first-day agenda",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`checklist-${index}`}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                  <label htmlFor={`checklist-${index}`} className="ml-2 block text-sm text-foreground">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Link
              href="/dashboard/onboarding"
              className="px-4 py-2 border border-border rounded-md text-foreground hover:bg-card"
            >
              Cancel
            </Link>
            <button type="submit" className="button-primary">
              Schedule Onboarding
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
