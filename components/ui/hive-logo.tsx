"use client"

import { motion } from 'framer-motion'

interface HiveLogoProps {
  size?: number
  className?: string
}

export function HiveLogo({ size = 40, className = "" }: HiveLogoProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
      >
        {/* Outer hexagon */}
        <motion.path
          d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z"
          fill="none"
          stroke="#EA580C"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Inner hexagon cells */}
        <motion.path
          d="M50 15 L70 27.5 L70 52.5 L50 65 L30 52.5 L30 27.5 Z"
          fill="#FB923C"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        {/* Small hexagon cells */}
        <motion.path
          d="M35 35 L45 41 L45 51 L35 57 L25 51 L25 41 Z"
          fill="#FDBA74"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        
        <motion.path
          d="M65 35 L75 41 L75 51 L65 57 L55 51 L55 41 Z"
          fill="#FDBA74"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        
        <motion.path
          d="M50 25 L60 31 L60 41 L50 47 L40 41 L40 31 Z"
          fill="#FED7AA"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
      </svg>
    </motion.div>
  )
}