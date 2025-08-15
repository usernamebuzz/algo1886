import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/sidebar"
import {
  Calendar,
  Target,
  TrendingUp,
  Star,
  Award,
  BookOpen,
  Code,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react"

export default function IntegratedDashboard() {

  // Sample algorithm statistics
  const algorithmStats = [
    { tag: "#그래프 이론", count: 25, percentage: 36.2 },
    { tag: "#그래프 탐색", count: 25, percentage: 36.2 },
    { tag: "#너비 우선 탐색", count: 22, percentage: 31.9 },
    { tag: "#다이나믹 프로그래밍", count: 18, percentage: 26.1 },
    { tag: "#구현", count: 19, percentage: 27.5 },
    { tag: "#깊이 우선 탐색", count: 14, percentage: 20.3 },
    { tag: "#그리디 알고리즘", count: 9, percentage: 13.0 },
    { tag: "#분할정복", count: 7, percentage: 10.1 },
    { tag: "#자료 구조", count: 7, percentage: 10.1 },
    { tag: "#학", count: 7, percentage: 10.1 },
  ]

  const getHeatmapColor = (count: number) => {
    if (count === 0) return "bg-slate-100"
    if (count === 1) return "bg-green-200"
    if (count === 2) return "bg-green-300"
    if (count === 3) return "bg-green-500"
    return "bg-green-600"
  }

 // Sample data for the heatmap
  const generateHeatmapData = () => {
    const data = []
    const today = new Date()
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const activity = Math.floor(Math.random() * 5) // 0-4 activity levels
      data.push({
        date: date.toISOString().split("T")[0],
        count: activity,
      })
    }
    return data
  }

  const heatmapData = generateHeatmapData()
  // Sample recent activities
  const recentActivities = [
    {
      id: 1,
      type: "record",
      title: "최적의 알고리즘 구하기",
      algorithm: "DFS",
      status: "success",
      date: "2시간 전",
      difficulty: 4,
    },
    {
      id: 2,
      type: "bookmark",
      title: "트리의 지름 구하기",
      algorithm: "그래프",
      date: "5시간 전",
    },
    {
      id: 3,
      type: "record",
      title: "동적 계획법 문제",
      algorithm: "DP",
      status: "failed",
      date: "1일 전",
      difficulty: 5,
    },
  ]

  // Sample upcoming recommendations
  const recommendations = [
    {
      id: 1,
      title: "백트래킹 복습하기",
      algorithm: "백트래킹",
      date: "2025/08/15",
      priority: "high",
    },
    {
      id: 2,
      title: "그래프 탐색 연습",
      algorithm: "BFS",
      date: "2025/08/15",
      priority: "medium",
    },
  ]

  // Sample core ideas
  const recentCoreIdeas = [
    {
      id: 1,
      title: "DFS에서는 어떻게 지나고 해야한다",
      algorithm: "DFS",
      content: "DFS를 사용할 때는 방문 처리를 언제 하는지가 중요하다. 보통 재귀 호출 전에 방문 처리를 하지만...",
      date: "2일 전",
    },
    {
      id: 2,
      title: "다이나믹 프로그래밍 최적화",
      algorithm: "DP",
      content: "메모이제이션을 사용할 때 공간 복잡도를 줄이는 방법으로는...",
      date: "3일 전",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "failed":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "partial":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
      default:
        return null
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="dashboard" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <h2 className="text-xl font-semibold text-slate-900">대시보드</h2>
        </header>

        <main className="p-6 space-y-6">
          {/* Quick Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">알고리즘 기록 수</p>
                  <p className="text-2xl font-bold text-blue-600">187개</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">스트릭</p>
                  <p className="text-2xl font-bold text-orange-600">23일</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">총 성공률</p>
                  <p className="text-2xl font-bold text-green-600">85%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">즐겨찾기</p>
                  <p className="text-2xl font-bold text-purple-600">42개</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recommended Review Problems */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  추천 복습 기록
                </h3>
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                  전체보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-slate-900">{rec.title}</h4>
                      <Badge className={`text-xs ${getPriorityColor(rec.priority)}`}>
                        {rec.priority === "high" ? "높음" : rec.priority === "medium" ? "보통" : "낮음"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {rec.algorithm}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{rec.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Core Ideas */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  최근 핵심 아이디어
                </h3>
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                  전체보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-3">
                {recentCoreIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900 text-sm">{idea.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {idea.algorithm}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-2 line-clamp-2">{idea.content}</p>
                    <p className="text-xs text-slate-500">{idea.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          {/* Updated activity heatmap description */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">최근 1년 간의 문제 기록</h3>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span>적음</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-slate-100 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                </div>
                <span>많음</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-53 gap-1 min-w-max">
                {heatmapData.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${getHeatmapColor(day.count)}`}
                    title={`${day.date}: ${day.count} problems`}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600 mt-4">
              올해 총 <strong>187</strong>개의 문제를 기록했습니다.
            </p>
          </div>
          
          {/* Skills Radar Chart */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">태그 분포</h3>
            <div className="flex items-center justify-center mb-6">
              {/* Simplified radar chart representation */}
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid lines */}
                  <g stroke="#e2e8f0" strokeWidth="1" fill="none">
                    <polygon points="100,20 171,50 171,150 100,180 29,150 29,50" />
                    <polygon points="100,40 151,60 151,140 100,160 49,140 49,60" />
                    <polygon points="100,60 131,70 131,130 100,140 69,130 69,70" />
                  </g>

                  {/* Data polygon */}
                  <polygon
                    points="100,30 160,55 140,135 100,150 60,125 70,65"
                    fill="rgb(34, 197, 94)"
                    fillOpacity="0.2"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                  />

                  {/* Labels */}
                  <text x="100" y="15" textAnchor="middle" className="text-xs fill-slate-600">
                    math
                  </text>
                  <text x="180" y="55" textAnchor="middle" className="text-xs fill-slate-600">
                    geometry
                  </text>
                  <text x="180" y="155" textAnchor="middle" className="text-xs fill-slate-600">
                    implementation
                  </text>
                  <text x="100" y="195" textAnchor="middle" className="text-xs fill-slate-600">
                    greedy
                  </text>
                  <text x="20" y="155" textAnchor="middle" className="text-xs fill-slate-600">
                    graphs
                  </text>
                  <text x="20" y="55" textAnchor="middle" className="text-xs fill-slate-600">
                    data_structures
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Algorithm Statistics */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">태그 분포</h3>
              <div className="flex items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                  <span>1-5</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                  <span>6-10</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                  <span>11+</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {algorithmStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {stat.tag}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-900">{stat.count}</span>
                    <span className="text-sm text-slate-600 w-12 text-right">{stat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Button variant="outline" size="sm">
                더 보기 (+25)
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
