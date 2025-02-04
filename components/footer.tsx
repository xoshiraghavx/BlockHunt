import { Instagram, Linkedin, Send, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" },
  ]

  return (
    <footer>
      <div className="container mx-auto px-4 mt-36">
        <div className="flex justify-center space-x-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

