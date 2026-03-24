'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/about' },
    { label: 'Ô nhiễm môi trường', href: '/pollution' },
    { label: 'Sống xanh', href: '/green-living' },
    { label: 'Thư viện hình ảnh', href: '/gallery' },
    { label: 'Chatbot', href: '/chatbot' },
    { label: 'Liên hệ', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              🌱
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Trợ Lý Sống Xanh</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-primary hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <ul className="flex flex-col gap-2 pt-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
