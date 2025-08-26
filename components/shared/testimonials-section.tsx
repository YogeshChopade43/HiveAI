"use client"

import { motion } from 'framer-motion'
import { TestimonialCard } from './testimonial-card'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Operations Officer",
      company: "TechCorp Industries",
      content: "HiveAI has revolutionized our document processing workflow. What used to take our team 8 hours now completes automatically in under 30 minutes with perfect accuracy.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Procurement",
      company: "Global Manufacturing Ltd",
      content: "The vendor follow-up automation has eliminated manual tracking entirely. Our procurement efficiency increased by 300% while maintaining perfect compliance records.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "Director of Finance",
      company: "Enterprise Solutions Inc",
      content: "Contract review that used to take our legal team days now happens instantly. HiveAI caught compliance issues we would have missed, saving us from costly mistakes.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              {' '}Enterprises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their operations with HiveAI's 
            intelligent automation solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "500+", label: "Enterprise Clients" },
            { number: "1M+", label: "Tasks Automated" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "24/7", label: "AI Agent Uptime" }
          ].map((stat, index) => (
            <div key={stat.label}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}