"use client"
import { createContext, useState } from "react"

type ReportDate = {
  year?: number|string
  month?: number|string
  day?: number|string
}
export type ReportDateProvider = {
  date:ReportDate
  dateChange: (field: keyof ReportDate, value: string|number)=> void
  resetDate: () => void
}
export const reportContext = createContext<ReportDateProvider | null>(null)

const TicketReportDateProvider = ({children}:{children:React.ReactNode}) => {
  const [date, setDate] = useState<ReportDate>({})

  const dateChange = (field: keyof ReportDate, value: string|number) => {
    setDate((prev) => {
      return {...prev,[field]:value}
    })
  }
  const resetDate = () => {
    setDate({})
  }
  return (
    <reportContext.Provider value={{ date, dateChange, resetDate }}>
    {children}
    </reportContext.Provider>
  )
}

export default TicketReportDateProvider
