"use client"
import {useEffect, useState } from "react"
import { dateToString, numberToRupiah } from "@/helper/convert"
import RoundedImage from "../ui/RoundedImage"
import Image from "next/image"
import Link from "next/link"

const TicketDetail = ({data}:{data:Ticket}) => {

  const getTotalPrice = () => {
    return data.quantity.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.total_price 
    }, 0);
  } 
  const getTotalQuantity = () => {
    return data.quantity.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity 
    }, 0);
  } 

  return (
    <section className="flexBetween flex-col items-center h-full mt-2">
        <div className="flex flex-col items-center mb-4">
          <Image
          width={400}
          height={400}
          className="w-[150px] aspect-square"
          src={`/icons/ticket.png`} 
          alt={`ticket icon`}
          draggable={false} 
          />
        </div>
        <div className="w-full px-8 mb-6">
          <div className="text-center mb-3 mt-1">
            <span className="font-medium mb-2">Detail Tiket</span>
          </div>
          <FieldItem title="Nama" value={data.name}/>
          <FieldItem title="Email" value={data.email}/>
          <FieldItem title="Tanggal Kunjungan" value={dateToString(new Date(data.visit_date))}/>
          <FieldItem title="Jadwal" value={data.schedule}/>
          <FieldItem title="Kadaluarsa" value={data.expired ? "Sudah" : "Belum"}/>
          <FieldItem title="Kartu Identitas" className="!items-start">
            <RoundedImage src={data.identity_card} alt="identity card" className="!w-full !rounded-lg" />
          </FieldItem>
          <FieldItem title="No WA" value={data.whatsapp_number}/>
          <FieldItem title="Nama Institusi" value={data.institute_name ?? "Tidak Ada"}/>
          <FieldItem title="Alamat Institusi" value={data.institute_address ?? "Tidak Ada"}/>
          <div className="flexCenter flex-col mt-8">
            <span className="font-medium mb-2">Detail Pembayaran</span>
            <div className="w-full flex flex-col">
              {data.quantity.map((item) => (
                <div key={item.type} className="flexBetween py-4 text-sm text-slate-700">
                  <span className="basis-1/3">{item.type}</span>
                  <span className="basis-1/4 text-center">{item.quantity} orang</span>
                  <span className="basis-1/3 text-end">{numberToRupiah(item.total_price)}</span>
                </div>
              ))}
              <div className="flexBetween py-4 border-t">
                <span className="basis-1/3">Total</span>
                <span className="basis-1/4 text-center">{getTotalQuantity()} orang</span>
                <span className="basis-1/3 text-end">{numberToRupiah(getTotalPrice())}</span>
              </div>
            </div>  
          </div>  
        </div>
        <div className="w-full sticky bottom-0 bg-white py-4 px-4 flexCenter">
          <Link
          href={`/admin/dashboard/tickets`}
          className="w-full xs:basis-[75%] px-4 py-2 bg-blue-500 text-white font-medium rounded-full text-center">
          Kembali 
          </Link>
        </div>
      </section>
  )
}

const FieldItem = ({title, value, ...rest}:{title:string, value?: string | number, children?:React.ReactNode, className?:string}) => {
  return (
    <div className={`flexBetween py-4 border-b ${rest.className}`}>
      <span className="basis-1/3 text-sm text-slate-700">{title}</span>
      <div className="basis-1/2 flexBetween">
        <span className="mr-6">:</span>
        {rest.children ?? <span>{value}</span>}
      </div>
    </div>
  )
}

export default TicketDetail
