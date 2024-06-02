"use client"
import TicketIcon from "@/components/icons/TicketIcon"
import { useTickets } from "@/components/provider/TicketsProvider"
import ButtonVerify from "@/components/ticket/ButtonVerify"
import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"
import TicketNotFound from "@/components/ticket/TicketNotFound"
import { dateToTanggal } from "@/helper/convert"
import { Spinner } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Page = ({params}:{params : {id:string}}) => {
  const { findTicket } = useTickets()
  const [ticket, setTicket] = useState(findTicket(params.id))
  return (
    <>
      {(!ticket) && <TicketNotFound />}
      {(ticket) && 
      (
        <section className="flexBetween flex-col items-center h-full">
          <div className="flex flex-col items-center mb-4">
            <Image 
            width={400}
            height={400}
            className="w-[150px] aspect-square"
            src={`/icons/ticket.png`} 
            alt={`ticket icon`}
            draggable={false} 
            />
            <span className="font-medium text-lg mt-4">Verifikasi Tiket</span>
          </div>
          <div className="w-full px-8 mb-12">
            <FieldItem title="Nama">
              <span>{ticket.name}</span>
            </FieldItem>
            <FieldItem title="Email">
              <span>{ticket.email}</span>
            </FieldItem>
            <FieldItem title="Tanggal Kunjungan">
              <span>{dateToTanggal(ticket.visit_date)}</span>
            </FieldItem>
            <div className="flex justify-between items-start py-4 border-b">
            <span className="text-sm text-slate-700">Jumlah Tiket</span>
              <div className="min-w-[40%] flex flex-col gap-3">
                {ticket.quantity.map((item, index) => (
                  <div key={index} className="flexBetween">
                    <span>{item.type}</span>
                    <div>
                      <span className="mr-4">:</span>
                      <span>{item.quantity} Orang</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Actions ticketId={params.id} />
        </section>
      )}
    </>
  )
}

const FieldItem = ({title, children}:{title:string, children: React.ReactNode}) => {
  return (
    <div className="flexBetween py-4 border-b">
      <span className="text-sm text-slate-700">{title}</span>
      {children}
    </div>
  )
}

const Actions = ({ticketId}:{ticketId:string}) => {
  return (
    <div className="w-full py-4 px-3 flex gap-3 text-center sticky bottom-0 bg-white">
      <Link
      href={`/admin/dashboard/home`}
      className="basis-1/2 px-4 py-2 border-2 border-gray-300 rounded-full"
      >Kembali</Link>
      <ButtonVerify ticketId={ticketId} className="basis-1/2"/>
    </div>
  )
}

export default Page
