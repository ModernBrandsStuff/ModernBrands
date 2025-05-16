export default function LaunchChecklistLoading() {
  return (
    <div className="container mx-auto py-10">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      <div className="h-4 w-full bg-gray-200 rounded mb-8 animate-pulse" />

      <div className="grid gap-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="h-12 bg-gray-200 rounded-lg animate-pulse" />
          ))}
      </div>
    </div>
  )
}
