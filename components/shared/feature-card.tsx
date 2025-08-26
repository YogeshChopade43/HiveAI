"use client"

import { motion } from 'framer-motion'
import { DivideIcon as LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, delay = 0, className = "" }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="h-full bg-white hover:bg-orange-50 transition-all duration-300 border-orange-100 hover:border-orange-200 hover:shadow-lg group">
        <CardContent className="p-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}