import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verify Ticket',
  description: 'Page for verify Ticket',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children} 
    </>
  )
}
