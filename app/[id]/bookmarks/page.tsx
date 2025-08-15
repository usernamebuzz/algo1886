import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Sidebar from "@/components/sidebar"

export default function BookmarksPage() {
  // Sample bookmarked problems data
  const bookmarkedProblems = [
    { id: 1, title: "최적의 알고리즘 구하기", type: "DFS", author: "작성자", date: "08/12" },
    { id: 2, title: "그래프 탐색 최적화", type: "DFS", author: "작성자", date: "08/12" },
    { id: 3, title: "동적 계획법 응용", type: "DFS", author: "작성자", date: "08/12" },
    { id: 4, title: "백트래킹 구현", type: "DFS", author: "작성자", date: "08/12" },
    { id: 5, title: "트리 순회 알고리즘", type: "DFS", author: "작성자", date: "08/12" },
    { id: 6, title: "최단 경로 찾기", type: "DFS", author: "작성자", date: "08/12" },
    { id: 7, title: "분할 정복 기법", type: "DFS", author: "작성자", date: "08/12" },
    { id: 8, title: "그리디 알고리즘", type: "DFS", author: "작성자", date: "08/12" },
    { id: 9, title: "이진 탐색 트리", type: "DFS", author: "작성자", date: "08/12" },
    { id: 10, title: "해시 테이블 구현", type: "DFS", author: "작성자", date: "08/12" },
    { id: 11, title: "힙 정렬 알고리즘", type: "DFS", author: "작성자", date: "08/12" },
    { id: 12, title: "문자열 매칭", type: "DFS", author: "작성자", date: "08/12" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="bookmarks" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-slate-900">즐겨찾기 문제</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <select className="px-3 py-1 border border-slate-200 rounded-md text-sm bg-white">
                  <option>전체</option>
                  <option>나</option>
                  <option>다른 사람</option>
                </select>
                <select className="px-3 py-1 border border-slate-200 rounded-md text-sm bg-white">
                  <option>유형</option>
                  <option>DFS</option>
                  <option>BFS</option>
                  <option>DP</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {bookmarkedProblems.map((problem) => (
              <Link key={problem.id} href={`/problem/${problem.id}`}>
                <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                      {problem.type}
                    </Badge>
                  </div>
                  <h3 className="font-medium text-slate-900 mb-3">{problem.title}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{problem.author}</span>
                    <span>{problem.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
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
