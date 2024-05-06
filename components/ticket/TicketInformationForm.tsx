"use client"
import { useContext, useEffect } from 'react'
import DatePicker from '../DatePicker'
import PickSchedule from './PickSchedule'
import { ticketPurchaseContext } from '../provider/TicketPurchaseProvider'
import PickTicketQuantity from './PickTicketQuantity'

const TicketInformationForm = () => {
  const { ticketInformationData, ticketQuantity, 
  setDisableSubmit, disableSubmit } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  useEffect(() => {
    if(ticketInformationData.visit_date && ticketInformationData.schedule && 
    checkQuantity()) {
      setDisableSubmit(false) 
    }else {
      !disableSubmit && setDisableSubmit(true)
    }
  },[ticketInformationData, ticketQuantity])

  const checkQuantity = () => {
    return ticketQuantity.some((item) => item.quantity > 0)
  }
  return (
    <section>
      <DatePicker className='mb-4'/>
      {ticketInformationData.visit_date && (
        <PickSchedule className='mb-10' />
      )}
      <PickTicketQuantity className='mb-20'/>
    </section>
  )
}

export default TicketInformationForm
