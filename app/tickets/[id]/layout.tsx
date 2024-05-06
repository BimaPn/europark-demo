import type { Metadata } from 'next'
import AdminNavbar from '@/components/AdminNavbar'

export const metadata: Metadata = {
  title: 'Ticket Detail',
  description: 'Ticket Detail',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <section className="boxWidth flex flex-col h-screen min-h-screen relative">
        <AdminNavbar className="sticky top-0 right-0 left-0 z-[1000]"  />
        <main className="w-[584px] flex flex-col px-4 mx-auto h-full">
          {children}
        </main>
      </section>
    )
}
