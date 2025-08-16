import { User, TrendingUp, BookOpen, Settings, BarChart3, LayoutDashboard, Bookmark } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  currentPage: string
}

export default function Sidebar({ currentPage }: SidebarProps) {
  const menuItems = [
    { href: "/id/dashboard", icon: LayoutDashboard, label: "대시보드", key: "dashboard" },
    { href: "/id/record", icon: BookOpen, label: "문제 기록하기", key: "record" },
    { href: "/id/my-problems", icon: TrendingUp, label: "내가 푼 문제", key: "my-problems" },
    { href: "/id/recommended", icon: BarChart3, label: "추천 복습 문제", key: "recommended" },
    { href: "/id/bookmarks", icon: Bookmark, label: "북마크 문제", key: "bookmarks" },
    { href: "/id/core-ideas", icon: Settings, label: "핵심 아이디어", key: "core-ideas" },
    { href: "/id/profile", icon: User, label: "내 정보", key: "profile" },
  ]

  return (
    <div className="w-64 bg-white border-r border-slate-200">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 h-[73px] flex items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="font-mono text-lg">&lt;/&gt;</span>
            ALGO
          </h1>
        </Link>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">닉네임</h3>
            <p className="text-sm text-slate-600">nn일 스트릭</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-2">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.key

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  isActive ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
