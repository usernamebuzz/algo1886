import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Sidebar from "@/components/sidebar"

export default function MyProblemsPage() {
  // Sample problems data
  const problems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: "문제 제목",
    type: "DFS",
    author: "성자",
    date: "08/12",
    difficulty: Math.floor(Math.random() * 5) + 1,
  }))

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="my-problems" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-slate-900">내가 푼 문제</h2>
            <div className="flex items-center gap-4">
              {/* Date Range Filter */}
              <div className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-md bg-slate-50">
                <Calendar className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-700">2025/8/12~2025/8/12</span>
              </div>
              {/* Type Filter */}
              <select className="px-3 py-2 border border-slate-200 rounded-md text-sm bg-white">
                <option>유형</option>
                <option>DFS</option>
                <option>BFS</option>
                <option>DP</option>
                <option>그래프</option>
              </select>
            </div>
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

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-slate-900 font-medium">
                1
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                2
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                3
              </Button>
              <span className="text-slate-400 px-2">...</span>
              <Button variant="ghost" size="sm" className="text-slate-600">
                8
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                9
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600">
                10
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
