import FloatingIcon from "@/components/FloatingIcon"
import HeroSection from "@/components/HeroSection"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Phone, MessageSquare, Mail, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

export default function Design1() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <BackgroundBeams/>
      <div className="" />

      {/* Left floating icons */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        <FloatingIcon icon={<Phone className="w-6 h-6" />} delay={0} />
        <FloatingIcon icon={<MessageSquare className="w-6 h-6" />} delay={0.2} />
        <FloatingIcon icon={<Mail className="w-6 h-6" />} delay={0.4} />
      </div>

      {/* Right floating icons */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 text-white">
        <FloatingIcon icon={<TwitterIcon className="w-6 h-6" />} delay={0.1} />
        <FloatingIcon icon={<InstagramIcon className="w-6 h-6" />} delay={0.3} />
        <FloatingIcon icon={<LinkedinIcon className="w-6 h-6" />} delay={0.5} />
      </div>

      {/* Hero Section */}
      <HeroSection />
      {/* <BackgroundBeams/> */}
    </main>
  )
}

