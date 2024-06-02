"use client"
import SuccessIcon from "@/components/icons/SuccessIcon"
import { ticketPurchaseContext } from "@/components/provider/TicketPurchaseProvider"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import QRCode from 'qrcode.react'
import { RiErrorWarningFill } from "react-icons/ri";

const Page = () => {
  const { isDone, resetFormData,
  ticketCheckoutData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [id, setId] = useState<string>("")

  useEffect(() => {
    setId(ticketCheckoutData.id as string)
    if(isDone) {
      resetFormData() 
    }
  },[])

  return  (
    <section className="flexBetween flex-col items-center h-svh">
      <div className="flex flex-col items-center">
        <SuccessIcon width={230}/>
        <span className="font-medium text-xl">Tiket berhasil dibuat !</span>

        <div className="flexCenter flex-col gap-5 px-4 py-3 bg-green-200 border border-green-500 rounded-xl mt-6 relative">

          <div className="absolute top-0 right-0 p-2">
          <RiErrorWarningFill className="text-[26px] text-green-800" />
          </div>
          <div className="w-fit p-4 bg-white rounded-xl mt-3">
            <QRCode value={`${process.env.NEXT_PUBLIC_APP_NAME}/tickets/${id}/verify`} />
          </div>
          <span className="text-center">Save this QR Code if you want to verify the ticket, you can visit
           <Link href={`/admin/dashboard/tickets`} className="font-semibold hover:underline"> this page</Link> to scan it.
          </span>

          <div className="mt-6">
            <span className="font-medium text-sm">*In the real project, It will send the Qr Code through email.</span>
          </div>
        </div>

      </div>
      <div className="w-full ss:w-[546px] py-4 px-3 flex gap-3 flexCenter text-center sticky bottom-0 left-0 right-0 mx-auto bg-white">
        <Link href={`/`} className="basis-1/2 px-4 py-2 border-2 border-gray-300 rounded-full">Beranda</Link>
        <Link href={`/tickets/buy`} className="basis-1/2 px-4 py-2 bg-blue-500 text-white font-medium rounded-full">
        Beli tiket lagi 
        </Link>
      </div>

    </section>
  )
}

export default Page
