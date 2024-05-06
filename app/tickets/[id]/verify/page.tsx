"use client"
import ApiClient from "@/app/api/axios/ApiClient"
import TicketIcon from "@/components/icons/TicketIcon"
import ButtonVerify from "@/components/ticket/ButtonVerify"
import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"
import TicketNotFound from "@/components/ticket/TicketNotFound"
import { dateToTanggal } from "@/helper/convert"
import { Spinner } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

type Quantity = {
  type: string
  quantity: number
}

type TicketData = {
  name: string
  email: string
  visit_date: string
  quantity : Quantity[]
}

const Page = ({params}:{params : {id:string}}) => {
  const [data, setData] = useState<TicketData|null>(null)
  const [errorCode, setErrorCode] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    ApiClient().get(`/api/tickets/${params.id}/get`)
    .then((res) => {
      setData(res.data.ticket)
      setIsLoading(false)
    })
    .catch((err) => {
      setErrorCode(err.response.status)
      setIsLoading(false)
    })
  },[])
  return (
    <>
      {isLoading && (
        <div className="w-full h-[80vh] flexCenter">
          <Spinner className="text-blue-500 text-[126px]"/>
        </div>
      )}
      {(!isLoading && errorCode === 404) && <TicketNotFound />}
      {(!isLoading && errorCode === 409) && (
        <ResponseMessageAdmin
        type="error"
        message="Verifikasi Gagal"
        subMessage="Tiket sudah di verifikasi sebelumnya." 
        />
      )}
      {(!isLoading && data) && 
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
              <span>{data?.name}</span>
            </FieldItem>
            <FieldItem title="Email">
              <span>{data?.email}</span>
            </FieldItem>
            <FieldItem title="Tanggal Kunjungan">
              <span>{dateToTanggal(new Date(data.visit_date))}</span>
            </FieldItem>
            <div className="flex justify-between items-start py-4 border-b">
            <span className="text-sm text-slate-700">Jumlah Tiket</span>
              <div className="min-w-[40%] flex flex-col gap-3">
                {data?.quantity.map((item, index) => (
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
    <div className="w-full py-4 px-4 flex gap-6 text-center sticky bottom-0 bg-white">
      <Link
      href={`/admin/dashboard/home`}
      className="basis-1/2 px-4 py-2 border-2 border-gray-300 rounded-full"
      >Kembali</Link>
      <ButtonVerify ticketId={ticketId} className="basis-1/2"/>
    </div>
  )
}

export default Page
