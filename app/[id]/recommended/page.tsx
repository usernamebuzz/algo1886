import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Sidebar from "@/components/sidebar"

export default function RecommendedPage() {
  // Sample recommended problems data
  const problems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: "문제 제목",
    type: "DFS",
    author: "작성자",
    date: "08/12",
    difficulty: Math.floor(Math.random() * 5) + 1,
    reason: "복습 추천", // Reason for recommendation
  }))

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="recommended" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-slate-900">추천 복습 문제</h2>
            <div className="flex items-center gap-4"></div>
          </div>
        </header>

        <main className="p-6">
          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {problems.map((problem) => (
              <Link
                key={problem.id}
                href="/post"
                className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                      {problem.type}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-sm text-slate-600">
                      {problem.author}, {problem.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
