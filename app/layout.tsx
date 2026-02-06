import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SantePlusVeto - Vétérinaire à domicile | Dr MACHANE Ali',
  description: 'Consultations vétérinaires professionnelles à domicile. Dr MACHANE Ali, votre vétérinaire de confiance pour le bien-être de vos animaux de compagnie.',
  keywords: 'vétérinaire à domicile, consultation vétérinaire, soins animaux, Dr MACHANE Ali, SantePlusVeto',
  authors: [{ name: 'SantePlusVeto' }],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'SantePlusVeto - Vétérinaire à domicile',
    description: 'Consultations vétérinaires professionnelles à domicile',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
