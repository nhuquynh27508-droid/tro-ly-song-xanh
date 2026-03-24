import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-primary">
                🌱
              </div>
              <h3 className="font-bold text-lg">Trợ Lý Sống Xanh</h3>
            </div>
            <p className="text-sm opacity-90">
              Cùng chúng tôi xây dựng một tương lai xanh hơn cho thế hệ tiếp theo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/pollution" className="hover:opacity-80 transition-opacity">
                  Ô nhiễm môi trường
                </Link>
              </li>
              <li>
                <Link href="/green-living" className="hover:opacity-80 transition-opacity">
                  Sống xanh
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-80 transition-opacity">
                  Thư viện hình ảnh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@trolysonggxanh.vn" className="hover:opacity-80 transition-opacity">
                  info@trolysonggxanh.vn
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+84123456789" className="hover:opacity-80 transition-opacity">
                  +84 (123) 456-789
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Trợ Lý Sống Xanh. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
