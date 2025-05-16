import { Plus, Trash2, Save } from "lucide-react"

export default function EmailAccessPage() {
  // Mock data for server-side rendering
  const domains = [
    { id: "1", domain: "modernonboard.com", description: "Company domain" },
    { id: "2", domain: "example.com", description: "Test domain" },
  ]

  const emails = [
    { id: "1", email: "admin@external.com", description: "External admin" },
    { id: "2", email: "test@gmail.com", description: "Test user" },
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Email Access Control</h1>
      <p className="text-foreground opacity-60 mb-8">
        Manage which email domains and specific email addresses are allowed to register and access the platform.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Allowed Domains */}
        <div className="card-modern">
          <h2 className="text-xl font-bold mb-4 text-foreground">Allowed Domains</h2>
          <p className="text-sm text-foreground opacity-60 mb-6">
            Any email address with these domains will be allowed to register.
          </p>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="domain" className="block text-sm font-medium text-foreground opacity-80 mb-1">
                  Domain
                </label>
                <input type="text" id="domain" placeholder="example.com" className="input-modern" />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="domainDescription"
                  className="block text-sm font-medium text-foreground opacity-80 mb-1"
                >
                  Description
                </label>
                <input type="text" id="domainDescription" placeholder="Optional description" className="input-modern" />
              </div>
              <div className="flex items-end">
                <button className="h-[46px] px-4 bg-primary text-white rounded-md hover:bg-primary-dark flex items-center">
                  <Plus size={18} className="mr-1" /> Add
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto">
            {domains.length === 0 ? (
              <p className="text-foreground opacity-60 text-center py-4">No domains added yet</p>
            ) : (
              domains.map((domain) => (
                <div
                  key={domain.id}
                  className="flex items-center justify-between p-3 bg-card border border-border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">@{domain.domain}</p>
                    {domain.description && <p className="text-sm text-foreground opacity-60">{domain.description}</p>}
                  </div>
                  <button className="text-red-400 hover:text-red-500" title="Remove domain">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Allowed Emails */}
        <div className="card-modern">
          <h2 className="text-xl font-bold mb-4 text-foreground">Allowed Emails</h2>
          <p className="text-sm text-foreground opacity-60 mb-6">
            Specific email addresses that are allowed to register, regardless of domain.
          </p>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-foreground opacity-80 mb-1">
                  Email
                </label>
                <input type="email" id="email" placeholder="user@example.com" className="input-modern" />
              </div>
              <div className="flex-1">
                <label htmlFor="emailDescription" className="block text-sm font-medium text-foreground opacity-80 mb-1">
                  Description
                </label>
                <input type="text" id="emailDescription" placeholder="Optional description" className="input-modern" />
              </div>
              <div className="flex items-end">
                <button className="h-[46px] px-4 bg-primary text-white rounded-md hover:bg-primary-dark flex items-center">
                  <Plus size={18} className="mr-1" /> Add
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto">
            {emails.length === 0 ? (
              <p className="text-foreground opacity-60 text-center py-4">No emails added yet</p>
            ) : (
              emails.map((email) => (
                <div
                  key={email.id}
                  className="flex items-center justify-between p-3 bg-card border border-border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{email.email}</p>
                    {email.description && <p className="text-sm text-foreground opacity-60">{email.description}</p>}
                  </div>
                  <button className="text-red-400 hover:text-red-500" title="Remove email">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="button-primary flex items-center">
          <Save size={18} className="mr-2" /> Save Changes
        </button>
      </div>
    </div>
  )
}
