import { Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/providers/ModalProvider'
import SchedulerModal from '@/components/SchedulerModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lattara - Marketing Analytics & CRM Consulting',
  description: 'Expert marketing analytics and CRM consulting services',
  icons: {
    icon: '/images/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <ModalProvider>
          {children}
          <SchedulerModal />
        </ModalProvider>
      </body>
    </html>
  )
}