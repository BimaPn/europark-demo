"use client"
import { Pie } from 'react-chartjs-2';

import {  
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js'

ChartJS.register( ArcElement, Legend, Tooltip);

export const options ={
  responsive: true,
  maintainAspectRatio:false
  };

const data ={
      labels: ["Anak-Anak","Dewasa","Lansia","Pelajar"],
      datasets: [{
        label: 'Ticket Category',
        data: [12,54,87,77],
        backgroundColor: [
        'rgb(191 219 254)',
        'rgb(147 197 253)',
        'rgb(96 165 250)',
        'rgb(59 130 246)'
        ]
      }]
}
const TicketCategoryStatistic = ({className}:{className?:string}) => {
  return (
    <div className={`bg-white rounded-xl px-4 py-4 relative ${className}`}>
     <div className='mb-[6px] flex flex-col gap-[2px] absolute top-4 left-4'>
        <span className='font-semibold text-sm ss:text-base'>Kategori Tiket</span>
        <span className='text-xs ss:text-sm text-slate-800'>Statistik penjualan berdasarkan kategori tiket</span>
      </div>
      <div className="w-full aspect-square mx-auto mt-16">
        <Pie
          options={options}
          data={data}
          className="w-full"
        />
      </div>

    </div>
  )
}

export default TicketCategoryStatistic
