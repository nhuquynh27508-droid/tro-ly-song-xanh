import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeatureCards } from '@/components/feature-cards'
import { Footer } from '@/components/footer'
import { FloatingChatButton } from '@/components/floating-chat-button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  )
}
