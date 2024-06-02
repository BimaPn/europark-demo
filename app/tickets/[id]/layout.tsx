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
      <section className="w-full flex flex-col h-svh min-h-svh relative">
        <AdminNavbar className="sticky top-0 right-0 left-0 z-[1000] px-3"  />
        <main className="w-full ss:w-[556px] flex flex-col mx-auto h-full">
          {children}
        </main>
      </section>
    )
}
