"use client"
import ApiClient from "@/app/api/axios/ApiClient"
import { ReportDateProvider, reportContext } from "@/components/provider/TicketReportDateProvider"
import { numberToMonth } from "@/helper/convert"
import { Select } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { InputSkeleton } from "./YearInput"

const MonthInput = ({optionChange}:{optionChange:(val:string|number) => void}) => {
  const [months, setMonths] = useState<string[]|number[]|null>(null)
  const { date } = useContext(reportContext) as ReportDateProvider
  useEffect(() => {
    setMonths(null)
    ApiClient().get(`/api/tickets/report/month-available?year=${date.year}`)
    .then((res) => {
      setMonths(res.data.months)
      optionChange(res.data.months[0])
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[date.year])
  return months ? (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">Pilih Bulan</span>
      <Select
      onChange={(e) => optionChange(e.target.value)}>
        {months.map((item, i) => (
          <option key={i} value={item}>{numberToMonth(item as number)}</option>
        ))}
      </Select>
    </div>
  ) : (
    <InputSkeleton />
  )
}

export default MonthInput
