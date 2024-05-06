"use client"
import SuccessIcon from "@/components/icons/SuccessIcon"
import { ticketPurchaseContext } from "@/components/provider/TicketPurchaseProvider"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"

const Page = () => {
  const { isDone, resetFormData,
  ticketCheckoutData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [email, setEmail] = useState<string>("")

  useEffect(() => {
    setEmail(ticketCheckoutData.email)
    if(isDone) {
      resetFormData() 
    }
  },[])

  return isDone && (
    <section className="flexBetween flex-col items-center h-full">
      <div className="flex flex-col items-center">
        <SuccessIcon width={230}/>
        <span className="font-medium text-xl">Tiket berhasil dibuat !</span>
        <div className="mt-6">
          <span className="w-[80%] block text-center mx-auto leading-[28px]">
          Ticket telah berhasil dibuat dan ticket telah dikirim ke email
           <span className="font-semibold ml-[6px]">{email}</span></span>
        </div>
      </div>
      <div className="w-full ss:w-[546px] py-4 px-4 flex gap-6 flexCenter text-center fixed bottom-0 left-0 right-0 mx-auto">
      <Link href={`/`} className="basis-1/2 px-4 py-2 border-2 border-gray-300 rounded-full">Beranda</Link>
      <Link href={`/tickets/buy`} className="basis-1/2 px-4 py-2 bg-blue-500 text-white font-medium rounded-full">
      Beli tiket lagi 
      </Link>
      </div>
    </section>
  )
}

export default Page
