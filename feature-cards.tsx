import Link from 'next/link'

export function FeatureCards() {
  const features = [
    {
      icon: '🌿',
      title: 'Sống Xanh Hàng Ngày',
      description: 'Học những thói quen bền vững giúp giảm tác động của bạn đến môi trường.',
      link: '/green-living',
    },
    {
      icon: '🌍',
      title: 'Ô Nhiễm Môi Trường',
      description: 'Hiểu rõ thực trạng và tác hại của ô nhiễm đối với hành tinh và sức khỏe của chúng ta.',
      link: '/pollution',
    },
    {
      icon: '📚',
      title: 'Thư Viện Hình Ảnh',
      description: 'Xem những hình ảnh đẹp về thiên nhiên và các dự án bảo vệ môi trường.',
      link: '/gallery',
    },
    {
      icon: '💬',
      title: 'Tư Vấn AI',
      description: 'Nói chuyện với chatbot AI để nhận lời khuyên cá nhân hóa về sống bền vững.',
      link: '/chatbot',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Bắt Đầu Hành Trình Xanh Của Bạn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Chúng tôi cung cấp tài nguyên, kiến thức và công cụ để giúp bạn sống một cuộc sống bền vững hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
              <div className="h-full p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
