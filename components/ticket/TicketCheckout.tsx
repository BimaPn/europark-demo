"use client"
import { 
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input, 
  NumberInput,
  NumberInputField,
  Textarea
} from '@chakra-ui/react'
import ImageInput from '../ui/ImageInput'
import { useContext, useEffect, useState } from 'react'
import { ticketPurchaseContext } from '../provider/TicketPurchaseProvider'
import ButtonCheckout from './ButtonCheckout'
import { useRouter } from 'next-nprogress-bar'
import { useTickets } from '../provider/TicketsProvider'

const TicketCheckout = () => {
  const { ticketCheckoutData,
  disableSubmit, setDisableSubmit } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  const checkFieldsExist = () => {
    return ticketCheckoutData.name && ticketCheckoutData.email && ticketCheckoutData.whatsapp_number
    && ticketCheckoutData.identity_card_picture.length > 0
  }
  const checkInstituteFields = () => {
    if(ticketCheckoutData.institute_name) {
      if(ticketCheckoutData.institute_address) {
        setDisableSubmit(false)
      }else {
        setDisableSubmit(true)
      }
    }else {
      setDisableSubmit(false)
    }
  }
  const setSubmitButton = () => {
    if(checkFieldsExist()) {
      checkInstituteFields()
    }else {
      setDisableSubmit(true)
    }
  }

  useEffect(() => {
    setSubmitButton()
  },[ticketCheckoutData])

  return (
    <section className='flex flex-col gap-8 mb-32'>
      <CheckoutForm disableSubmit={disableSubmit} />
    </section>
  )
}

const CheckoutForm = ({disableSubmit}:{disableSubmit:boolean}) => {
  const {ticketCheckoutData, getTicketQuantity, ticketInformationData,
  setTicketCheckoutData, ticketQuantity, setDisableSubmit, setIsDone}= useContext(ticketPurchaseContext) as TicketPurchaseContext
  const { addTicket } = useTickets()
  const router = useRouter()

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTicket = {
      id: `tickets-${1}`, 
      identity_card: ticketCheckoutData.identity_card_picture, 
      name: ticketCheckoutData.name,
      email: ticketCheckoutData.email, 
      visit_date: ticketInformationData.visit_date as Date, 
      schedule: ticketInformationData.schedule?.schedule as string,
      expired: false,
      whatsapp_number: ticketCheckoutData.whatsapp_number,
      institute_name: ticketCheckoutData.institute_name ?? null, 
      institute_address : ticketCheckoutData.institute_address ?? null,
      quantity: getTicketQuantity() 
    }
    
    setTicketCheckoutData((prev: TicketCheckoutForm) => ({...prev, id: newTicket.id})) 
    addTicket(newTicket)
    setIsDone(true)
    router.push("/tickets/buy/success")
  }

  const onChange = (field: keyof TicketCheckoutForm, value: string|number) => {
    setTicketCheckoutData((prev:TicketCheckoutForm) => {
      return {...prev,[field]:value}
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3 mb-6 '>
        <span className='font-medium !text-base ss:text-lg'>Kemana tiket akan dikirim ?</span>
        <FormControl>
          <FormLabel
          fontWeight={400} className='font-normal !text-xs ss:!text-sm'>Alamat Email</FormLabel>
          <Input
          type='email'
          value={ticketCheckoutData.email}
          onChange={(e) => onChange("email",e.target.value)}
          className="xs:!w-[70%] !text-sm ss:!text-base"
          isRequired
          placeholder='Email Address'
          />
        </FormControl>        
      </div>    
      <div className='flex flex-col gap-4 '>
        <span className='font-medium !text-base ss:text-lg'>Masukan Data Diri Anda</span>       
        <FormControl className='!-mt-1'>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal !text-xs ss:!text-sm'>Nama Lengkap</FormLabel>
          <Input 
          type='text'
          value={ticketCheckoutData.name}
          onChange={(e) => onChange("name",e.target.value)}
          className="xs:!w-[70%] !text-sm ss:!text-base"
          isRequired
          placeholder='Full Name'
          />
        </FormControl>        

        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal !text-xs ss:!text-sm'>Nomor Whatsapp</FormLabel>
          <NumberInput
          value={ticketCheckoutData.whatsapp_number}
          onChange={(value) => onChange("whatsapp_number",value)}
          className="xs:!w-[70%]"
          isRequired
          >
          <NumberInputField className='!text-sm ss:!text-base' placeholder="Whatsapp Number" />
          </NumberInput>
        </FormControl> 
        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal !text-xs ss:!text-sm'>Foto Kartu Identitas</FormLabel>
          <ImageInput
          onChange={(image) => onChange("identity_card_picture",image)}
          />
        </FormControl> 

        <FormControl>
          <FormLabel
          fontWeight={400} fontSize={15} className='font-normal !text-xs ss:!text-sm'>
          Nama Institusi (optional)
          </FormLabel>
          <Input 
          type='text'
          value={ticketCheckoutData.institute_name ? ticketCheckoutData.institute_name : ""}
          onChange={(e) => onChange("institute_name",e.target.value)}
          className="xs:!w-[70%] !text-sm ss:!text-base"
          placeholder="Institute's Name"
          />
        </FormControl> 

        <FormControl
         className={`${ticketCheckoutData.institute_name ? "opacity-100":"opacity-50"}`}
         isReadOnly={ticketCheckoutData.institute_name == undefined}
        >
          <FormLabel
          fontWeight={400}
          fontSize={15}
          className='font-normal !text-xs ss:!text-sm'>Alamat Institusi (optional)</FormLabel>
          <Textarea
          value={ticketCheckoutData.institute_address ? ticketCheckoutData.institute_address : ""}
          onChange={(e) => onChange("institute_address", e.target.value)}
          placeholder="Institute's Address" 
          className='!text-sm ss:!text-base'
          />
        </FormControl> 
      </div>
      <div className="w-full ss:w-[546px] bg-white mx-auto fixed bottom-0 right-0 left-0 z-[1000]">
        <ButtonCheckout 
        disabled={disableSubmit}
        ticketQuantity={ticketQuantity}
        />
      </div>
    </form>
  )
}

export default TicketCheckout
