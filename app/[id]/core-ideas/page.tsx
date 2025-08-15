import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Sidebar from "@/components/sidebar"

export default function CoreIdeasPage() {
  // Sample core ideas data
  const coreIdeas = [
    {
      id: 1,
      title: "최적의 알고리즘 구하기",
      type: "DFS",
      idea: "DFS에서는 어떻게 지켜고 해야한다. BFS랑 이런점에서 다르다 왜 다른건지 잘 적어야겠지...",
    },
    {
      id: 2,
      title: "최적의 알고리즘 구하기",
      type: "DFS",
      idea: "DFS에서는 어떻게 지켜고 해야한다. BFS랑 이런점에서 다르다",
    },
    {
      id: 3,
      title: "최적의 알고리즘 구하기",
      type: "DFS",
      idea: "DFS에서는 어떻게 지켜고 해야한다. BFS랑 이런점에서 다르다",
    },
    {
      id: 4,
      title: "최적의 알고리즘 구하기",
      type: "DFS",
      idea: "DFS에서는 어떻게 지켜고 해야한다. BFS랑 이런점에서 다르다",
    },
    {
      id: 5,
      title: "최적의 알고리즘 구하기",
      type: "DFS",
      idea: "DFS에서는 어떻게 지켜고 해야한다. BFS랑 이런점에서 다르다 왜 다른건지 잘 적어야겠지...",
    },
    {
      id: 6,
      title: "최적의 알고리즘 구하기",
      type: "DFS",
      idea: "DFS에서는 어떻게 지켜고 해야한다. BFS랑 이런점에서 다르다 왜 다른건지 잘 적어야겠지...",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="core-ideas" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-slate-900">기억할 사항</h2>
            <select className="px-3 py-1 border border-slate-200 rounded-md text-sm bg-white">
              <option>유형</option>
              <option>DFS</option>
              <option>BFS</option>
              <option>DP</option>
            </select>
          </div>
        </header>

        <main className="p-6">
          {/* Ideas Table */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 font-medium text-slate-700 text-sm">
              <div className="col-span-3">문제 제목</div>
              <div className="col-span-2">문제 유형</div>
              <div className="col-span-7">핵심 아이디어</div>
            </div>

            <div className="divide-y divide-slate-200">
              {coreIdeas.map((idea) => (
                <div key={idea.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-slate-50 transition-colors">
                  <div className="col-span-3">
                    <Link href={`/problem/${idea.id}`} className="text-slate-900 hover:text-blue-600 font-medium">
                      {idea.title}
                    </Link>
                  </div>
                  <div className="col-span-2">
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                      {idea.type}
                    </Badge>
                  </div>
                  <div className="col-span-7 text-slate-700 text-sm leading-relaxed">{idea.idea}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="ghost" size="sm" className="text-slate-900">
              1
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600">
              2
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600">
              3
            </Button>
            <span className="text-slate-600 mx-2">...</span>
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
        </main>
      </div>
    </div>
  )
}
