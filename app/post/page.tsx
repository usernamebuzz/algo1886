"use client"

import { Star, ExternalLink, Clock, User, Check, X, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SurveyModal } from "@/components/survey-modal"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AlgorithmPost() {
  const [showSurvey, setShowSurvey] = useState(false)
  const router = useRouter()

  const handleDFSClick = () => {
    router.push("/search?q=DFS")
  }

  const handleOtherSolutionsClick = () => {
    const problemUrl = "https://everytime.kr/494445/362533992"
    router.push(`/search?q=${encodeURIComponent(problemUrl)}`)
  }

  const difficulty = 4 // 1-5 star rating
  const successStatus = "성공" // 성공, 실패, 부분 성공
  const codeBlocks = [
    {
      id: 1,
      title: "코드 1",
      success: true,
      code: `function solution(numbers) {
    return numbers.map(el => {
        if (!(el % 2)) return el + 1;
        const bin = '0' + el.toString(2);
        const idx = bin.lastIndexOf('0');
        return parseInt(bin.substring(0, idx) + '10' + bin.substring(idx + 2), 2);
    });
}`,
    },
    {
      id: 2,
      title: "코드 2",
      success: false,
      code: `// 첫 번째 시도 - 시간 초과
function solution(numbers) {
    // 비효율적인 접근 방법
    return numbers.map(num => {
        for (let i = num + 1; ; i++) {
            if (countBits(i) === countBits(num)) {
                return i;
            }
        }
    });
}`,
    },
  ]
  const solutionSteps = [
    "입력값을 이진수로 변환하여 패턴을 분석합니다",
    "짝수인 경우 단순히 1을 더해주면 다음 큰 수를 얻을 수 있습니다",
    "홀수인 경우 비트 조작을 통해 최적해를 찾습니다",
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
    ))
  }

  const getSuccessStatusColor = (status: string) => {
    switch (status) {
      case "성공":
        return "bg-green-100 text-green-800 border-green-200"
      case "실패":
        return "bg-red-100 text-red-800 border-red-200"
      case "부분 성공":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-slate-100 text-slate-800 border-slate-200"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="flex items-center justify-between p-4 max-w-4xl mx-auto">
          <Link href="/">
            <h1 className="text-xl font-bold text-slate-900 hover:text-slate-700 cursor-pointer flex items-center gap-2">
              <span className="font-mono text-lg">&lt;/&gt;</span>
              ALGO
            </h1>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Problem Title Section */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold text-slate-900">문제 제목</h2>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer transition-colors"
                  onClick={handleDFSClick}
                >
                  #DFS
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-600">
                <a
                  href="https://everytime.kr/494445/362533992"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  문제 링크
                </a>
                <Badge
                  variant="outline"
                  className="text-xs cursor-pointer hover:bg-slate-100 transition-colors"
                  onClick={handleOtherSolutionsClick}
                >
                  다른 풀이
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>닉네임</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>2시간 전</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">성공여부:</span>
                  <Badge className={`text-xs border ${getSuccessStatusColor(successStatus)}`}>{successStatus}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">체감 난이도:</span>
                  <div className="flex items-center gap-1">{renderStars(difficulty)}</div>
                </div>
              </div>
            </div>

            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-500">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">상세사항</h3>
          <div className="space-y-4 text-slate-700">
            <p className="leading-relaxed">
              이 문제는 <strong>깊이 우선 탐색(DFS)</strong>을 활용하여 해결할 수 있는 그래프 탐색 문제입니다.
            </p>
            <p className="leading-relaxed">
              주어진 조건에 따라 모든 가능한 경로를 탐색하면서 최적해를 찾아야 합니다. 이 과정에서 백트래킹 기법을
              사용하여 불필요한 탐색을 줄일 수 있습니다.
            </p>
            <div className="bg-slate-50 rounded p-3 text-sm border-l-4 border-slate-300">
              <strong>복잡도:</strong> 시간 O(V + E), 공간 O(V)
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">코드</h3>
          <div className="space-y-4">
            {codeBlocks.map((block) => (
              <div key={block.id} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-slate-700">{block.title}</h4>
                  <div className="flex items-center gap-1">
                    {block.success ? (
                      <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
                        <Check className="h-3 w-3 mr-1" />
                        성공
                      </Badge>
                    ) : (
                      <Badge className="text-xs bg-red-100 text-red-800 border-red-200">
                        <X className="h-3 w-3 mr-1" />
                        실패
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-slate-100">
                    <code>{block.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">풀이과정</h3>
          <ol className="space-y-3">
            {solutionSteps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Core Idea */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">핵심 아이디어</h3>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <p className="text-slate-700">
              이 문제의 핵심은 <code className="bg-slate-100 px-2 py-1 rounded text-sm">비트 조작</code>을 통해
              효율적으로 다음 큰 수를 찾는 것입니다. 짝수와 홀수를 구분하여 각각 다른 전략을 사용하면
              <strong>O(1) 시간</strong>에 해결할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">다른 풀이 참고</h3>
          <div className="space-y-3 text-slate-700">
            <p className="leading-relaxed">
              이 문제에 대한 다른 접근 방법으로는 <strong>재귀적 접근</strong>이나 <strong>동적 프로그래밍</strong>을
              활용할 수도 있습니다.
            </p>
            <div className="bg-slate-50 rounded p-3 text-sm">
              <p>
                <strong>참고 자료:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>알고리즘 문제해결 전략 - 구종만</li>
                <li>LeetCode Similar Problems: #338, #191</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Survey Modal */}
      <SurveyModal isOpen={showSurvey} onClose={() => setShowSurvey(false)} />
    </div>
  )
}
