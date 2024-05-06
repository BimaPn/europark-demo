"use client"
import { addMonths } from 'date-fns';
import { useContext, useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css'
import '../app/css/custom-daypicker.css'
import { ticketPurchaseContext } from './provider/TicketPurchaseProvider';

const DatePicker = ({className}:{className?:string}) => {
  const { ticketInformationData,
  setTicketInformationData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const disabledDates = [
    {
      after: addMonths(new Date(), 1)
    },
    {
      before: new Date()
    }
  ]

  const onChange = (day:Date|undefined) => {
    setTicketInformationData((prev: TicketInformationForm) => {
      return {...prev, visit_date: day}
    })
  }
  const classNames: ClassNames = {
    ...styles,
       head_cell  : "w-[100px]",
       table : "w-full",
       day_selected: "!bg-blue-600 !text-white"
  };
  return (
    <div className={`${className}`}>
      <span className='font-medium items-start !text-base'>1. Pilih Tanggal Kunjungan</span>
      <div className='flexCenter -mt-2'>
        <DayPicker
        mode='single'
        classNames={classNames}
        disabled={disabledDates}
        selected={ticketInformationData.visit_date}
        onSelect={onChange}
        />
      </div>

    </div>
  )
}

export default DatePicker
