"use client"
import ApiClient from '@/app/api/axios/ApiClient'
import Skeleton from '@/components/skeleton/Skeleton'
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const YearInput = ({optionChange}:{optionChange:(val:string|number) => void}) => {
  const [years, setYears] = useState<string[]|number[]|null>(null)
  useEffect(() => {
    ApiClient().get(`/api/tickets/report/year-available`)
    .then((res) => {
      setYears(res.data.years)
      optionChange(res.data.years[0])
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])
  return years ? (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">Pilih Tahun</span>
      <Select 
      onChange={(e) => optionChange(e.target.value)}>
        {years.map((item, i) => (
          <option key={i} value={item}>{item}</option>
        ))}
      </Select>
    </div>
  ) : (
    <InputSkeleton />
  )
}

export const InputSkeleton = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Skeleton className='w-1/4 size-sm'/>
      <Skeleton className='w-full size-xl'/>
    </div>
  )
}

export default YearInput
