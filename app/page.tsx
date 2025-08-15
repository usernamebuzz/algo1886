"use client"

import type React from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AlgorithmList() {
  // Sample data for algorithm posts
  const posts = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: "문제 제목",
    tag: "DFS",
    author: "작성자",
    date: "08/12",
  }))

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("query") as string
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
          <Link href="/">
            <h1 className="text-xl font-bold text-slate-900 hover:text-slate-700 cursor-pointer flex items-center gap-2">
              <span className="font-mono text-lg">&lt;/&gt;</span>
              ALGO
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm" className="bg-slate-100 hover:bg-slate-200">
                로그인
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search Section */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <form onSubmit={handleSearch} className="flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="query"
                placeholder="알고리즘 문제를 검색해보세요..."
                className="flex-1 px-3 py-2 bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              />
            </div>
            <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-6">
              검색
            </Button>
          </form>
        </div>

        {/* Content Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">다른 사람들의 문제 풀이</h2>
          <select className="px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
            <option value="latest">최신순</option>
            <option value="popular">인기순</option>
          </select>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <Link key={post.id} href="/post">
              <div className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer group">
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs font-medium">
                    {post.tag}
                  </Badge>

                  <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-6">
          <Button variant="outline" className="px-8 bg-transparent">
            더 보기
          </Button>
        </div>
      </main>
    </div>
  )
}
