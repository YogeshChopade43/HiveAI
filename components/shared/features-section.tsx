"use client"

import { motion } from 'framer-motion'
import { FileText, Search, MessageSquare, Users, Shield, Zap } from 'lucide-react'
import { FeatureCard } from './feature-card'

export function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Invoice Processing",
      description: "Automatically extract, validate, and process invoices with 99.9% accuracy using advanced OCR and AI."
    },
    {
      icon: Search,
      title: "Contract Review",
      description: "Intelligent contract analysis identifying risks, key terms, and compliance issues in seconds."
    },
    {
      icon: MessageSquare,
      title: "Meeting Summary",
      description: "Transform lengthy meetings into actionable insights and detailed summaries automatically."
    },
    {
      icon: Users,
      title: "Vendor Follow-up",
      description: "Automate vendor communications and track procurement workflows with intelligent scheduling."
    },
    {
      icon: Shield,
      title: "Data Quality Inspector",
      description: "Continuously monitor and validate data integrity across all your enterprise systems."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Create custom AI-powered workflows that adapt and learn from your business processes."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
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
            Powerful AI Agents for
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              {' '}Enterprise Automation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent AI agents work tirelessly to automate your most complex workflows, 
            reducing manual effort while increasing accuracy and efficiency.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your enterprise operations?
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}