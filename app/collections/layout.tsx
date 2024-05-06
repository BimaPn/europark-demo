import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koleksi Museum',
  description: 'Museum Collections',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='min-h-screen'>
      <Navbar className=''/>
      <main className='mt-3 mb-12'>
        {children}
      </main>
      <Footer />
    </section>
  )
}
