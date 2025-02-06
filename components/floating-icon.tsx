"use client";

import { motion } from "framer-motion";
import MetaMask from "@/app/public/metamaskW.png";

const icons = [
  { src: "/metamaskW.png", alt: "Metamask" },  // ✅ Use MetaMask directly
  { src: "/gitcoin.png", alt: "gitcoin" },
  { src: "/zapper.png", alt: "zapper" },
  { src: "/farcaster.png", alt: "farcaster" },
  { src: "/agora.png", alt: "agora" },
  { src: "/opensea.png", alt: "opensea" },
];

export function FloatingIcons() {
  const radius = 41; // Circle radius in viewport percentage

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * 2 * Math.PI; // Distribute in a circle
        const top = `${50 + radius * Math.sin(angle)}%`;
        const left = `${50 + radius * Math.cos(angle)}%`;

        // Randomize animation properties
        const floatX = Math.random() * 10 + 5; // Random horizontal movement range
        const floatY = Math.random() * 15 + 5; // Random vertical movement range
        const duration = Math.random() * 2 + 3; // Random animation speed (3-5 sec)
        const rotation = Math.random() * 30 - 15; // Random tilt angle (-15 to 15 degrees)

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ y: 0, rotate: rotation }}
            animate={{
              y: [-floatY, floatY, -floatY],
              x: [-floatX, floatX, -floatX],
              rotate: [rotation, rotation + 5, rotation - 5, rotation], // Slight tilt movement
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{ top, left }}
          >
            <div className="shadow-xl">
              <img src={icon.src} alt={icon.alt} className="w-16 h-16 rounded-xl" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
