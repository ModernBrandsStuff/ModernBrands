import Link from "next/link"
import { Plus, Search, Filter, MoreHorizontal, FileText, FilePlus, FolderPlus } from "lucide-react"

export default function DocumentsPage() {
  // Mock document data
  const documents = [
    {
      id: 1,
      name: "Employee Handbook",
      type: "PDF",
      size: "2.4 MB",
      updatedAt: "2023-05-15",
      category: "HR",
    },
    {
      id: 2,
      name: "Onboarding Checklist",
      type: "DOCX",
      size: "1.2 MB",
      updatedAt: "2023-06-02",
      category: "Onboarding",
    },
    {
      id: 3,
      name: "Non-Disclosure Agreement",
      type: "PDF",
      size: "0.8 MB",
      updatedAt: "2023-04-20",
      category: "Legal",
    },
    {
      id: 4,
      name: "Benefits Overview",
      type: "PDF",
      size: "1.5 MB",
      updatedAt: "2023-05-28",
      category: "HR",
    },
    {
      id: 5,
      name: "Company Policies",
      type: "DOCX",
      size: "3.1 MB",
      updatedAt: "2023-06-10",
      category: "HR",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Documents</h1>
          <p className="text-foreground opacity-60">Manage your organization's documents</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 border border-border rounded-md text-foreground flex items-center hover:bg-card">
            <FolderPlus size={18} className="mr-2" /> New Folder
          </button>
          <button className="px-4 py-2 border border-border rounded-md text-foreground flex items-center hover:bg-card">
            <FilePlus size={18} className="mr-2" /> Upload
          </button>
          <Link href="/dashboard/documents/create" className="button-primary flex items-center">
            <Plus size={18} className="mr-2" /> Create
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
              placeholder="Search documents..."
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
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Type</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Category</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Size</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-foreground opacity-60">Updated</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-foreground opacity-60">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <tr key={document.id} className="border-b border-border hover:bg-card">
                <td className="px-4 py-4 text-sm">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-primary mr-3" />
                    <span className="text-foreground">{document.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-foreground">{document.type}</td>
                <td className="px-4 py-4 text-sm text-foreground">{document.category}</td>
                <td className="px-4 py-4 text-sm text-foreground">{document.size}</td>
                <td className="px-4 py-4 text-sm text-foreground">{document.updatedAt}</td>
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
        <p className="text-sm text-foreground opacity-60">Showing 5 of 5 documents</p>
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
