"use client"
import { Select } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { ReportDateProvider, reportContext } from "@/components/provider/TicketReportDateProvider"
import ApiClient from "@/app/api/axios/ApiClient"
import { InputSkeleton } from "./YearInput"

const DayInput = ({optionChange}:{optionChange:(val:string|number) => void}) => {
  const [days, setDays] = useState<string[]|number[]|null>(null)
  const { date } = useContext(reportContext) as ReportDateProvider
  useEffect(() => {
    setDays(null)
    ApiClient().get(`/api/tickets/report/day-available?year=${date.year}&month=${date.month}`)
    .then((res) => {
      setDays(res.data.days)
      optionChange(res.data.days[0])
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[date.month])
  return days ? (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">Pilih Hari</span>
      <Select
      onChange={(e) => optionChange(e.target.value)}>
        {days?.map((item, i) => (
          <option key={i} value={item}>{item}</option>
        ))}
      </Select>
    </div>
  ) : (
    <InputSkeleton />
  )
}

export default DayInput
