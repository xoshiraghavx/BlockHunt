import { Blocks } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-10 z-50 ">
      <div className=" grid grid-cols-3 container mx-auto px-2">
      <div className="flex items-center space-x-2">
            <Blocks className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-white">DappHunt</span>
          </div>
        <div className="flex h-16 items-center justify-center">
          <div className="hidden md:flex space-x-16">
            {["Product", "Launches", "News", "Community", "FAQs"].map((item) => (
              <Link key={item} href="#" className="text-lg text-gray-300 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

