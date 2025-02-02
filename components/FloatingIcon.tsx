"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingIconProps {
  icon: ReactNode
  delay: number
}

export default function FloatingIcon({ icon, delay }: FloatingIconProps) {
  return (
    <motion.div
      className="w-16 h-16 rounded-full flex items-center justify-center shadow-md cursor-pointer border text-gray-500 hover:text-white border-gray-700 hover:border-gray-100 hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.div>
  )
}

