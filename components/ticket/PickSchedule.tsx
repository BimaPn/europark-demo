"use client"
import { useContext, useState } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"

const initial = [
{
  id: 1,
  schedule: "08.00 - 11.00"
},
{
  id: 2,
  schedule: "12.30 - 15.00"
},
{
  id: 3,
  schedule: "16.30 - 18.00"
},
]

const PickSchedule = ({className}:{className?: string}) => {
  const { ticketInformationData,
  setTicketInformationData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [schedules, setSchedules] = useState<Schedule[]>(initial)

  const onChange = (e:React.MouseEvent<HTMLButtonElement>, schedule: Schedule) => {
    e.preventDefault()
    setTicketInformationData((prev:TicketInformationForm) => {
      return {...prev, schedule:{id:schedule.id, schedule: schedule.schedule}}
    })
  }
  return (
    <div className={`flex flex-col gap-[20px] ${className}`}>
      <span className='font-medium !text-base'>2. Pilih Jadwal Kunjungan</span>
      <div className="flex flex-col ss:flex-row items-center gap-3 text-sm">
       {schedules && schedules.map((item, index) => (
            <button 
            key={item.id}
            onClick={(e) => onChange(e, item)}
            className={`w-full ss:basis-1/3 py-2 px-2 ${ticketInformationData?.schedule?.id == item.id ? "bg-blue-600 text-white" : "bg-blue-100 text-black"} 
            text-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed`}>{item.schedule}</button>
       ))}
      </div>

    </div>
  )
}

export default PickSchedule
