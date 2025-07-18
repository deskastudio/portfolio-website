import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deska Mulyana - Frontend Developer',
  description: 'Portfolio website of Deska Mulyana, a passionate Frontend Developer specializing in React.js, Next.js, and TypeScript.',
  keywords: 'Frontend Developer, React.js, Next.js, TypeScript, Web Development, Portfolio',
  authors: [{ name: 'Deska Mulyana' }],
  creator: 'Deska Mulyana',
  openGraph: {
    title: 'Deska Mulyana - Frontend Developer',
    description: 'Portfolio website showcasing projects and skills in modern web development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deska Mulyana - Frontend Developer',
    description: 'Portfolio website showcasing projects and skills in modern web development.',
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
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}