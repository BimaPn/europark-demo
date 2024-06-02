"use client"
import {  
  Chart as ChartJS,
  CategoryScale,  
  LinearScale,
  BarElement, 
  Tooltip,
} from 'chart.js';
import type { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Skeleton from '../skeleton/Skeleton';
// import TicketReportModal from '../TicketReportModal';
ChartJS.register(   CategoryScale,   LinearScale,   BarElement,   Tooltip);

export const options ={
    aspectRatio: 2.75/1
};

const data = {
  "labels": ["January","February","Mart","April","May","June"],
  datasets: [{
    label: 'Ticket selling',
    data: [3,6,5,8,4,7],
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderColor: 'rgba(59, 130, 246, 1)',
    borderWidth: 1
  }]
}
const TicketAnalytic = ({className}:{className?:string}) => {
  return (
    <div className={`bg-white ss:rounded-lg px-3 ss:px-4 pt-[68px] pb-4 relative ${className}`}>
      <div className='w-full px-4 pt-4 absolute top-0 left-0 flexBetween'>
        <span className='font-semibold text-slate-600 text-sm ss:text-base'>Tickets Selling</span>

      </div>
      <Bar
      options={options}
      data={data} className='w-full aspect-video' 
      /> 
    </div>
  )
}

export default TicketAnalytic
