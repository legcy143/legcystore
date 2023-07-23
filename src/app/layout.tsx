import Navbar from '@/GlobalComponents/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/GlobalComponents/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'legcyjs',
  description: 'legcy js collection of mini porjects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`scrollbar ${inter.className}`} suppressHydrationWarning={true} >
        <Navbar />
        <section className='w-[99%] mx-auto max-w-7xl'>
            {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
