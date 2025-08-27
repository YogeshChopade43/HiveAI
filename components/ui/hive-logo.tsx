"use client"

import { motion } from 'framer-motion'

interface HiveLogoProps {
  size?: number
  className?: string
  animate?: boolean
}

export function HiveLogo({ size = 40, className = "", animate = true }: HiveLogoProps) {
  const hexagonPath = "M12 2l10 6v12L12 26 2 20V8l10-6z"
  
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={animate ? { rotate: 360 } : {}}
      transition={animate ? { duration: 20, repeat: Infinity, ease: "linear" } : {}}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Outer Hexagon */}
        <motion.path
          d="M12 2l9 5.2v10.6L12 23l-9-5.2V7.2L12 2z"
          fill="url(#hiveGradient1)"
          stroke="#EA580C"
          strokeWidth="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        
        {/* Inner Hexagon Pattern */}
        <motion.path
          d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5z"
          fill="url(#hiveGradient2)"
          stroke="#F97316"
          strokeWidth="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        
        {/* Center Hexagon */}
        <motion.path
          d="M12 8l3 1.7v3.6L12 16l-3-1.7V10.7L12 8z"
          fill="url(#hiveGradient3)"
          stroke="#FB923C"
          strokeWidth="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        
        {/* Honeycomb Cells */}
        <motion.circle
          cx="8"
          cy="10"
          r="1.5"
          fill="#FDBA74"
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />
        <motion.circle
          cx="16"
          cy="10"
          r="1.5"
          fill="#FDBA74"
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        <motion.circle
          cx="8"
          cy="14"
          r="1.5"
          fill="#FDBA74"
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        />
        <motion.circle
          cx="16"
          cy="14"
          r="1.5"
          fill="#FDBA74"
          opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="hiveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="hiveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="hiveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#FED7AA" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}