import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deska Mulyana - Software Engineer & AI Engineer',
  description: 'Software Engineer & AI Engineer with experience building production-grade systems end-to-end. Scalable web apps, RESTful APIs, Docker/CI/CD, and LLM-based AI systems with RAG.',
  keywords: 'Deska Mulyana, Software Engineer, AI Engineer, Full-Stack Developer, TypeScript, Python, Next.js, NestJS, Docker, PostgreSQL, LLM, RAG, DevOps',
  authors: [{ name: 'Deska Mulyana' }],
  creator: 'Deska Mulyana',
  metadataBase: new URL('https://deskastudio.online'),
  openGraph: {
    title: 'Deska Mulyana - Software Engineer & AI Engineer',
    description: 'Building production-grade systems end-to-end. Scalable web apps, RESTful APIs, Docker/CI/CD, and LLM-based AI systems with RAG.',
    type: 'website',
    locale: 'en_US',
    url: 'https://deskastudio.online',
    siteName: 'Deska Mulyana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deska Mulyana - Software Engineer & AI Engineer',
    description: 'Building production-grade systems end-to-end. Full-Stack, AI/LLM, DevOps.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedDarkMode = localStorage.getItem('darkMode')
                const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
                const isDark = savedDarkMode === 'true' || (savedDarkMode === null && systemDarkMode)
                
                if (isDark) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (error) {
                console.error('Dark mode initialization error:', error)
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-dark-bg transition-colors duration-300 relative`}>
        <div className="noise" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}