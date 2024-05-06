import TicketPurchaseProvider from '@/components/provider/TicketPurchaseProvider'
import type { Metadata } from 'next'
import TicketNavbar from '../TicketNavbar'

export const metadata: Metadata = {
  title: 'Buy Ticket',
  description: 'Page for buy Ticket',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TicketPurchaseProvider>
      <section className="boxWidth flex flex-col relative px-1">
        <TicketNavbar className="sticky top-0 right-0 left-0 z-[1000]"  />
        <main className="w-full ss:w-[546px] flex flex-col ss:px-4 mx-auto text-sm ss:text-base">
          {children}
        </main>
      </section>
    </TicketPurchaseProvider>
  )
}
