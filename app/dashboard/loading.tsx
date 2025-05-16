export default function DashboardLoading() {
  return (
    <div className="container mx-auto py-10">
      <div className="h-8 w-48 bg-card rounded mb-6 animate-pulse" />
      <div className="h-4 w-full bg-card rounded mb-8 animate-pulse" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="h-32 bg-card rounded-lg animate-pulse" />
          ))}
      </div>
    </div>
  )
}
