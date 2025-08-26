"use client"

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
  delay?: number
}

export function TestimonialCard({ name, role, company, content, rating, avatar, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border-orange-100">
        <CardContent className="p-6">
          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? 'text-orange-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
            "{content}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-orange-100 text-orange-700">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-gray-900">{name}</div>
              <div className="text-sm text-gray-600">{role}</div>
              <div className="text-sm text-orange-600 font-medium">{company}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}