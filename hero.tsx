import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight text-balance">
              Sống Xanh, Yêu Thương Trái Đất
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-pretty">
              Khám phá cách bảo vệ môi trường của chúng ta thông qua những hành động nhỏ, những thay đổi lớn. Cùng nhau xây dựng một tương lai bền vững cho thế hệ tiếp theo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/chatbot"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors text-center"
              >
                💬 Trò chuyện với AI
              </Link>
              <Link
                href="/green-living"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
              >
                Khám phá sống xanh
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🌍</div>
              <p className="text-xl font-semibold text-primary">Trái Đất của chúng ta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
    </div>
  )
}
