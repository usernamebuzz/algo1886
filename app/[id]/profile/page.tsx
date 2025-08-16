"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/sidebar"
import { Calendar, Target, TrendingUp, Award, Star, Camera, Edit2 } from "lucide-react"
import { useState } from "react"

export default function ProfileDashboard() {
  const [isEditing, setIsEditing] = useState(false)
  const [nickname, setNickname] = useState("닉네임")
  const [profileImage, setProfileImage] = useState("/user-profile-illustration.png")

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

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar currentPage="profile" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-[73px] flex items-center px-4">
          <h2 className="text-xl font-semibold text-slate-900">내 정보</h2>
        </header>

        <main className="p-6 space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">프로필 정보</h3>
              {!isEditing ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  편집
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                    취소
                  </Button>
                  <Button size="sm" onClick={handleSaveProfile}>
                    저장
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-6">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="프로필 이미지"
                  className="w-20 h-20 rounded-full object-cover border-2 border-slate-200"
                />
                {isEditing && (
                  <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-60 transition-colors">
                    <Camera className="w-5 h-5 text-white" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                )}
              </div>

              {/* Nickname */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">닉네임</label>
                {isEditing ? (
                  <Input
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="max-w-xs"
                    placeholder="닉네임을 입력하세요"
                  />
                ) : (
                  <p className="text-lg font-semibold text-slate-900">{nickname}</p>
                )}
              </div>
            </div>
          </div>

          {/* User Statistics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Study Streak */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">연속 기록일</h3>
                  <p className="text-2xl font-bold text-orange-600">23일</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">최장 연속: 45일</p>
            </div>

            {/* Total Recorded Problems */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">기록한 문제 수</h3>
                  <p className="text-2xl font-bold text-blue-600">187개</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">이번 주: +24개</p>
            </div>

            {/* Success Rate */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">성공률</h3>
                  <p className="text-2xl font-bold text-green-600">82.4%</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">154/187 문제 성공</p>
            </div>

            {/* Bookmarked Problems Count */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">북마크</h3>
                  <p className="text-2xl font-bold text-purple-600">42개</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">이번 주: +3개</p>
            </div>

            {/* Core Ideas Count */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Award className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">핵심 아이디어</h3>
                  <p className="text-2xl font-bold text-indigo-600">89개</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">가장 아이디어 많은 유형: DFS (13.4%)</p>
            </div>

            {/* Favorite Algorithm */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Target className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">가장 많이 다룬 유형</h3>
                  <p className="text-lg font-bold text-amber-600">그래프 이론</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">25문제 (13.4%)</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
