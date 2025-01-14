import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lattara - Marketing Analytics & CRM Consulting',
  description: 'Expert marketing analytics and CRM consulting services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Add this to ensure CSS is loaded */}
        <link rel="stylesheet" href="/_next/static/css/app.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
