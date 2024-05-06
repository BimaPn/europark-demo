"use client"
import TicketDetail from "@/components/dashboard/TicketDetail"
import { useTickets } from "@/components/provider/TicketsProvider"
import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"
import { useState } from "react"

const Page = async ({params}:{params : {id:string}}) => {
  const { findTicket } = useTickets()
  const [ticket, setTicket] = useState(findTicket(params.id))
  return (
    <>
      {!ticket && (
        <ResponseMessageAdmin
        type="error"
        message="Tiket Tidak Ditemukan"
        subMessage={`Harap cek kembali ID tiket yang di tuju.`} 
        />
      )}
      {ticket && (
        <TicketDetail data={ticket} />
      )}
    </>
  )
}

export default Page
