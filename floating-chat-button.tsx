'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export function FloatingChatButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleOpenChat = () => {
    window.open(
      'https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/28/17/20260128173250-RWA5764N.json',
      'ChatbotWindow',
      'width=500,height=600'
    )
  }

  return (
    <button
      onClick={handleOpenChat}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary hover:bg-accent text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      aria-label="Chat với trợ lý AI"
    >
      <MessageCircle size={20} />
      <span className={`font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ${
        isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
      }`}>
        Chat với trợ lý AI
      </span>
    </button>
  )
}
