"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Zap, FileText, Search, MessageSquare, Users, Shield, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'

export default function AgentsPage() {
  const agents = [
    {
      id: 'invoice-processing',
      name: 'Invoice Processing Agent',
      icon: FileText,
      description: 'Automatically extract, validate, and process invoices with 99.9% accuracy using advanced OCR and AI.',
      features: [
        'OCR text extraction from PDFs and images',
        'Automatic data validation and verification',
        'Integration with accounting systems',
        'Multi-currency and tax handling',
        'Fraud detection and anomaly alerts',
        'Batch processing capabilities'
      ],
      pricing: '$299/month',
      popular: true,
      metrics: {
        accuracy: '99.9%',
        speed: '10x faster',
        savings: '$50K/year'
      }
    },
    {
      id: 'contract-review',
      name: 'Contract Review Agent',
      icon: Search,
      description: 'Intelligent contract analysis identifying risks, key terms, and compliance issues in seconds.',
      features: [
        'Risk assessment and scoring',
        'Key terms extraction',
        'Compliance checking',
        'Legal clause analysis',
        'Redlining suggestions',
        'Contract comparison tools'
      ],
      pricing: '$499/month',
      popular: false,
      metrics: {
        accuracy: '98.5%',
        speed: '50x faster',
        savings: '$100K/year'
      }
    },
    {
      id: 'meeting-summary',
      name: 'Meeting Summary Agent',
      icon: MessageSquare,
      description: 'Transform lengthy meetings into actionable insights and detailed summaries automatically.',
      features: [
        'Real-time transcription',
        'Action items extraction',
        'Key decisions tracking',
        'Speaker identification',
        'Multi-language support',
        'Integration with calendars'
      ],
      pricing: '$199/month',
      popular: false,
      metrics: {
        accuracy: '96%',
        speed: '20x faster',
        savings: '$25K/year'
      }
    },
    {
      id: 'data-quality',
      name: 'Data Quality Inspector',
      icon: Shield,
      description: 'Continuously monitor and validate data integrity across all your enterprise systems.',
      features: [
        'Real-time data monitoring',
        'Anomaly detection',
        'Data cleansing automation',
        'Quality scoring',
        'Compliance reporting',
        'Custom validation rules'
      ],
      pricing: '$399/month',
      popular: false,
      metrics: {
        accuracy: '99.5%',
        speed: '24/7 monitoring',
        savings: '$75K/year'
      }
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation Agent',
      icon: Zap,
      description: 'Create custom AI-powered workflows that adapt and learn from your business processes.',
      features: [
        'Visual workflow builder',
        'Smart decision making',
        'Process optimization',
        'Integration hub',
        'Performance analytics',
        'Self-learning capabilities'
      ],
      pricing: '$599/month',
      popular: false,
      metrics: {
        accuracy: '97%',
        speed: '30x faster',
        savings: '$150K/year'
      }
    },
    {
      id: 'customer-support',
      name: 'Customer Support Agent',
      icon: Users,
      description: 'Intelligent customer service automation with natural language understanding.',
      features: [
        '24/7 customer support',
        'Multi-channel integration',
        'Sentiment analysis',
        'Escalation management',
        'Knowledge base integration',
        'Performance tracking'
      ],
      pricing: '$349/month',
      popular: false,
      metrics: {
        accuracy: '94%',
        speed: 'Instant response',
        savings: '$80K/year'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
              <Brain className="w-4 h-4 mr-2" />
              Agent-as-a-Service Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                {' '}AI Agent
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deploy specialized AI agents tailored to your business needs. Each agent is designed to automate 
              specific workflows with enterprise-grade accuracy and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                  agent.popular ? 'ring-2 ring-orange-200 bg-gradient-to-br from-orange-50 to-white' : 'bg-white'
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                          <agent.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {agent.name}
                          </CardTitle>
                          {agent.popular && (
                            <Badge className="mt-1 bg-orange-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Most Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{agent.pricing}</div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">{agent.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="font-bold text-orange-600">{agent.metrics.accuracy}</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-orange-600">{agent.metrics.speed}</div>
                        <div className="text-xs text-gray-500">Speed</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-orange-600">{agent.metrics.savings}</div>
                        <div className="text-xs text-gray-500">Avg Savings</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {agent.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button 
                        className={`w-full ${
                          agent.popular 
                            ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white' 
                            : 'bg-white border border-orange-300 text-orange-700 hover:bg-orange-50'
                        }`}
                      >
                        Deploy {agent.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Custom AI Agents?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Our enterprise team can build custom AI agents tailored to your specific business processes 
              and requirements. Get dedicated support and unlimited customization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50">
                Contact Enterprise Sales
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                View Enterprise Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}