"use client"
import { IoTicket } from "react-icons/io5"
import { HiUsers } from "react-icons/hi2"
import { MdCollectionsBookmark } from "react-icons/md"
import { PiCurrencyDollarBold } from "react-icons/pi"
import { integerToRupiah } from "@/helper/convert"
import { stats } from "@/constants/statistic"
type Stat = {
  total: number | string,
  label: string,
  icon: React.ReactNode,
}

const styles = [{
  parent: "bg-[#ffe2e6]",
  icon: "bg-[#f95b7e]"
},
{
  parent: "bg-[#fff4de]",
  icon: "bg-[#fe9378]"
},
{
  parent: "bg-[#dcfce7]",
  icon: "bg-[#3cd856]"
},
{
  parent: "bg-[#f4e8ff]",
  icon: "bg-[#bf84fd]"
}
]

const icons = [
  <HiUsers key={1} className="text-[19px]" />,
  <IoTicket key={2} className="text-[18px]" />,
  <PiCurrencyDollarBold key={3} className="text-[19px]" />,
  <MdCollectionsBookmark key={4} className="text-[18px]" />
]
const Stats = () => {
  return (
    <div className="w-full grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4 gap-3 ss:gap-4">
      {stats.map((item,i) => (
        <StatItem
        key={i}
        total={item.total}
        label={item.label}
        icon={icons[i]}
        style={styles[i]}
        />
      ))}
    </div>
  )
}
type Style = {
  parent:string,
  icon:string
}
const StatItem = ({total, label, icon, style}:Stat & {style:Style}) => {
  return (
    <div className={`flex flex-col px-3 py-3 rounded-lg ${style.parent} relative`}>
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-2xl">{total}</span>
        <span className="text-[13px] text-slate-500">{label}</span>
      </div>
      <div
      className={`absolute top-3 right-3 min-w-[32px] flexCenter ${style.icon}
      aspect-square rounded-full ${style.icon} text-white`}>
        {icon}
      </div>
    </div>
  )
}


export default Stats
