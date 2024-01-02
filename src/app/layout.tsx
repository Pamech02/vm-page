import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vitalmed',
  description: 'Pagina de prueba',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-blue-200 h-screen'>
        <NavBar/>
        

        {children}

      </body>
    </html>
  )
}
