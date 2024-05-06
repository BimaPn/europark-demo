import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './css/skeleton.css'
import { ChakraProvider } from '@/components/provider/ChakraProvider'
import ProgressBarProvider from '@/components/provider/ProgressBarProvider'
import CollectionsProvider from '@/components/provider/CollectionsProvider'
import TicketsProvider from '@/components/provider/TicketsProvider'

const poppins = Poppins({ subsets:["latin"],weight:["400","500", "600", "700"]})

export const metadata: Metadata = {
  title: 'Europark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ProgressBarProvider>
          <ChakraProvider>
            <TicketsProvider>
              <CollectionsProvider>
                {children}
              </CollectionsProvider>
            </TicketsProvider>
          </ChakraProvider>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
