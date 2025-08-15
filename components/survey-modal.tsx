"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SurveyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">설문</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-slate-900 flex items-center justify-center gap-2">
              <span className="font-mono text-lg">&lt;/&gt;</span>
              ALGO를 잘 사용하고 계신가요?
            </h3>
            <p className="text-slate-600 leading-relaxed">
              더 나은{" "}
              <span className="inline-flex items-center gap-1">
                <span className="font-mono text-sm">&lt;/&gt;</span>
                ALGO
              </span>
              를 위해 설문에 참여해주세요
            </p>
          </div>

          <Button
            className="w-full bg-slate-900 hover:bg-slate-800 text-white"
            onClick={() => {
              window.open("https://forms.google.com", "_blank")
              onClose()
            }}
          >
            구글 폼 링크
          </Button>
        </div>
      </div>
    </div>
  )
}
