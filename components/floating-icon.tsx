"use client"

import { motion } from "framer-motion"

const icons = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "Metamask",
    delay: 0,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "OpenSea",
    delay: 1,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "WalletConnect",
    delay: 2,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "Magic Eden",
    delay: 3,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "Magic Eden",
    delay: 4,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "Magic Eden",
    delay: 5,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LMU3PcBjxYeoMTqktFH6EFlCs9jcb.png",
    alt: "Magic Eden",
    delay: 6,
  },
]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ y: 0 }}
          animate={{
            y: [-90, 80, -40],
            x: [-10, 0, 10],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: icon.delay,
          }}
          style={{
            top: `${Math.random() * 70 + 20}%`,
            left: `${Math.random() * 70 + 5}%`,
          }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white/5" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

