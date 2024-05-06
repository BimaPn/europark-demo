import AlertMessage from '@/components/AlertMessage'
import PriceProvider from '@/components/provider/PriceProvider'
import DashboardLayout from '@/layouts/DashboardLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashboardLayout>
        <AlertMessage>
          <PriceProvider>
            {children}
          </PriceProvider>
        </AlertMessage>
      </DashboardLayout>
    </>
  )
}

