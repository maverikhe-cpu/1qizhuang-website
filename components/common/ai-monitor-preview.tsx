"use client"

import { useState } from "react"
import { Play, Pause, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AIMonitorPreviewProps {
  videoUrl?: string
}

export function AIMonitorPreview({ videoUrl }: AIMonitorPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [zoom, setZoom] = useState(1)

  return (
    <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
      {/* Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
          {/* AI识别框动画示例 */}
          <motion.div
            className="absolute border-2 border-green-500 rounded"
            style={{
              left: "20%",
              top: "30%",
              width: "15%",
              height: "20%",
            }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                "0 0 0 10px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
              工人A
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white hover:bg-white/20"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
          className="text-white hover:bg-white/20"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-white text-sm">{Math.round(zoom * 100)}%</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setZoom(Math.min(2, zoom + 0.1))}
          className="text-white hover:bg-white/20"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

