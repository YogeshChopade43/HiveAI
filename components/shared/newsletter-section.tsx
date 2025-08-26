"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15 15v-30l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead with HiveAI Insights
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
            Get the latest updates on AI automation trends, enterprise workflows, and 
            exclusive insights from our team of AI specialists.
          </p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-3 text-lg bg-white border-0 focus:ring-2 focus:ring-orange-300"
                  disabled={isSubmitted}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitted}
                className="bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 py-3 group"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-3 gap-8 text-center"
          >
            {[
              { icon: "🚀", title: "Weekly AI Insights", desc: "Latest trends and innovations" },
              { icon: "📊", title: "Case Studies", desc: "Real-world success stories" },
              { icon: "🎯", title: "Exclusive Updates", desc: "Early access to new features" }
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-white">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-orange-100 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>

          <p className="text-orange-200 text-sm mt-8">
            Join 50,000+ professionals. Unsubscribe anytime. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  )
}