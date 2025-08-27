"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Play, Zap, Brain, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HiveLogo } from '@/components/ui/hive-logo'

export function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hive-gradient-subtle pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: isClient ? Math.random() * window.innerWidth : 0,
              y: isClient ? Math.random() * window.innerHeight : 0,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: isClient ? Math.random() * window.innerWidth : 0,
              y: isClient ? Math.random() * window.innerHeight : 0,
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <div className="w-2 h-2 bg-hive-300 rounded-full opacity-40" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-hive-100 text-hive-800 text-sm font-medium mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Enterprise Automation
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              <span className="text-hive-gradient">
                HiveAI
              </span>
              <br />
              <span className="text-gray-800">Enterprise AI</span>
              <br />
              <span className="text-gray-600">Agents Automating</span>
              <br />
              <span className="text-hive-600">Your Workflow</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-lg"
            >
              Transform your business operations with intelligent AI agents that automate complex workflows, process documents, and make intelligent decisions at enterprise scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link href="/agents">
                <Button 
                  size="lg"
                  className="btn-hive-primary px-8 py-4 text-lg group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="btn-hive-secondary px-8 py-4 text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-600"
            >
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-hive-600" />
                <span>500+ Enterprises</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-4 w-4 mr-1 text-hive-600" />
                <span>1M+ Tasks Automated</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Large Hexagon Display */}
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <HiveLogo size={400} className="w-full h-full" />
              </motion.div>
              
              {/* Floating Cards */}
              {[
                { icon: '🤖', text: 'AI Agents', delay: 0.5, position: 'top-0 left-0' },
                { icon: '⚡', text: 'Automation', delay: 0.7, position: 'top-0 right-0' },
                { icon: '🎯', text: 'Enterprise', delay: 0.9, position: 'bottom-0 left-0' },
                { icon: '🚀', text: 'Scale', delay: 1.1, position: 'bottom-0 right-0' },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: card.delay, duration: 0.8 }}
                  className={`absolute ${card.position} w-32 h-24 card-hive p-3`}
                >
                  <div className="text-2xl mb-1">{card.icon}</div>
                  <div className="text-xs font-medium text-gray-700">{card.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}