import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'HiveAI - Enterprise AI Agents Automating Your Workflow',
  description: 'Transform your business operations with intelligent AI agents that automate complex workflows, process documents, and make intelligent decisions at enterprise scale.',
  keywords: 'AI, automation, enterprise, workflow, artificial intelligence, document processing, contract review, AI agents, HiveAI',
  authors: [{ name: 'HiveAI Team' }],
  creator: 'HiveAI',
  publisher: 'HiveAI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hiveai.com',
    title: 'HiveAI - Enterprise AI Agents Automating Your Workflow',
    description: 'Transform your business operations with intelligent AI agents that automate complex workflows, process documents, and make intelligent decisions at enterprise scale.',
    siteName: 'HiveAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiveAI - Enterprise AI Agents Automating Your Workflow',
    description: 'Transform your business operations with intelligent AI agents that automate complex workflows, process documents, and make intelligent decisions at enterprise scale.',
    creator: '@HiveAI',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F97316' },
    { media: '(prefers-color-scheme: dark)', color: '#F97316' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="overflow-x-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}