"use client"

import { Plus, ChevronDown, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Sidebar from "@/components/sidebar"

export default function ProblemRecorder() {
  const [problemTypes, setProblemTypes] = useState(["맞음", "틀림"])
  const [solutionSteps, setSolutionSteps] = useState([{ id: 1, content: "" }])
  const [difficulty, setDifficulty] = useState(0)
  const [codeBlocks, setCodeBlocks] = useState([{ id: 1, code: "", success: null, title: "코드 1" }])

  const addProblemType = () => {
    // Logic to add new problem type
  }

  const addSolutionStep = () => {
    setSolutionSteps([...solutionSteps, { id: Date.now(), content: "" }])
  }

  const addCodeBlock = () => {
    const newId = Date.now()
    setCodeBlocks([
      ...codeBlocks,
      {
        id: newId,
        code: "",
        success: null,
        title: `코드 ${codeBlocks.length + 1}`,
      },
    ])
  }

  const removeCodeBlock = (id: number) => {
    if (codeBlocks.length > 1) {
      setCodeBlocks(codeBlocks.filter((block) => block.id !== id))
    }
  }

  const updateCodeSuccess = (id: number, success: boolean | null) => {
    setCodeBlocks(codeBlocks.map((block) => (block.id === id ? { ...block, success } : block)))
  }

  const updateCodeContent = (id: number, code: string) => {
    setCodeBlocks(codeBlocks.map((block) => (block.id === id ? { ...block, code } : block)))
  }

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        onClick={() => setDifficulty(i + 1)}
        className={`text-lg ${
          i < difficulty ? "text-yellow-400" : "text-slate-300"
        } hover:text-yellow-400 transition-colors`}
      >
        ★
      </button>
    ))
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="record" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-slate-900">문제 기록하기</h2>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <form className="space-y-6">
              {/* ... existing form content ... */}
              {/* Problem URL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">문제 URL</label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  placeholder="https://www.acmicpc.net/problem/1234"
                />
                <p className="text-xs text-slate-500 mt-1">백준 문제는 자동으로 문제 제목, 유형이 입력됩니다.</p>
              </div>

              {/* Problem Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">문제 제목</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  placeholder="문제 제목을 입력하세요"
                />
              </div>

              {/* Problem Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">문제 유형</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent appearance-none">
                      <option>DFS</option>
                      <option>BFS</option>
                      <option>그래프</option>
                      <option>다이나믹 프로그래밍</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addProblemType}
                    className="px-3 bg-transparent border-slate-200 hover:bg-slate-100"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Success Status and Difficulty */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">성공여부</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent appearance-none">
                      <option>성공</option>
                      <option>실패</option>
                      <option>부분 성공</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">체감 난이도</label>
                  <div className="flex items-center gap-1 py-2">{renderStars()}</div>
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">상세사항</label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none"
                  placeholder="문제에 대한 상세한 설명을 입력하세요..."
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">코드</label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addCodeBlock}
                    className="text-xs bg-transparent border-slate-200 hover:bg-slate-100"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    코드 추가
                  </Button>
                </div>
                <div className="space-y-4">
                  {codeBlocks.map((block, index) => (
                    <div key={block.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-medium text-slate-700">{block.title}</h4>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateCodeSuccess(block.id, true)}
                              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                                block.success === true
                                  ? "bg-green-100 text-green-800 border border-green-200"
                                  : "bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-700"
                              }`}
                            >
                              <Check className="h-3 w-3" />
                              성공
                            </button>
                            <button
                              type="button"
                              onClick={() => updateCodeSuccess(block.id, false)}
                              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                                block.success === false
                                  ? "bg-red-100 text-red-800 border border-red-200"
                                  : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-700"
                              }`}
                            >
                              <X className="h-3 w-3" />
                              실패
                            </button>
                          </div>
                        </div>
                        {codeBlocks.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCodeBlock(block.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <textarea
                        rows={12}
                        value={block.code}
                        onChange={(e) => updateCodeContent(block.id, e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none font-mono text-sm"
                        placeholder="코드를 입력하세요..."
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Process */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700">풀이 과정</label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addSolutionStep}
                    className="text-xs bg-transparent border-slate-200 hover:bg-slate-100"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    단계 추가
                  </Button>
                </div>
                <div className="space-y-3">
                  {solutionSteps.map((step, index) => (
                    <div key={step.id}>
                      <label className="block text-xs font-medium text-slate-600 mb-1">풀이 과정 {index + 1}</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none"
                        placeholder={`${index + 1}단계 풀이 과정을 설명하세요...`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Ideas */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">핵심 아이디어</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none"
                  placeholder="문제 해결의 핵심 아이디어를 정리하세요..."
                />
              </div>

              {/* Other Solutions Reference */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">다른 풀이 참고</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none"
                  placeholder="다른 사람의 풀이나 참고한 자료를 기록하세요..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" className="border-slate-200 hover:bg-slate-100 bg-transparent">
                  임시저장
                </Button>
                <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                  기록하기
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
