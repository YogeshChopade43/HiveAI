import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HiveAI - Enterprise AI Agents Automating Your Workflow',
  description: 'Transform your business operations with intelligent AI agents that automate complex workflows, process documents, and make intelligent decisions at enterprise scale.',
  keywords: 'AI, automation, enterprise, workflow, artificial intelligence, document processing, contract review',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}