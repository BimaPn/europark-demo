"use client"
import { useContext, useEffect, useState } from "react"
import Modal, { Body, Footer, Header, Content } from "../ui/Modal"
import { TbEdit } from "react-icons/tb"
import ButtonPrimary from "../ui/ButtonPrimary"
import { FormControl, NumberInput, NumberInputField } from "@chakra-ui/react"
import ApiClient from "@/app/api/axios/ApiClient"
import Skeleton from "../skeleton/Skeleton"
import { AlertMessageProvider, alertMessageContext } from "../AlertMessage"

const ChangeTicketPrice = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal defaultValue={true}> 
      <button 
      onClick={() => setIsOpen(prev => !prev)}
      className="flexCenter gap-1 bg-blue-500 text-white pl-1 pr-2 ss:pl-2 ss:pr-3 py-[7px] ss:py-2 rounded-lg text-sm ss:text-[15px]">
        <TbEdit className="text-[17px] ss:text-lg" />
        <span className="text-center -mt-[2px]">Ubah Harga</span>
      </button>
      {isOpen && <FormContent onClose={() => setIsOpen(false)}/>}
    </Modal>
  )
}

interface Pricing {
  id: number | string
  price: number|string
}

interface DefaultPricing extends Pricing {
  type: string
}

const FormContent = ({onClose}:{onClose:() => void}) => {
  const [disabledButton, setDisabledButton] = useState(true)
  const [defaultPricings, setDefaultPricings] = useState<DefaultPricing[] | null>(null)
  const [pricings, setPricings] = useState<Pricing[] | null>(null)
  const { setAlert } = useContext(alertMessageContext) as AlertMessageProvider

  useEffect(() => {
    ApiClient().get(`/api/tickets/ticket-pricings/get`)
    .then((res) => {
      const result = res.data.pricings
      setPricings(result.map((item:Pricing) => {
        return {id: item.id, price: item.price}
      }))
      setDefaultPricings(res.data.pricings)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[]) 

  useEffect(() => {
    if(!pricings || !defaultPricings) return
    setDisabledButton(isDataValid(pricings) ? false : true)
  },[pricings])
  
  const isDataValid = (_pricings:Pricing[]) => {
    let isNotValid = false
    for(let i = 0;i < _pricings.length;i++) {
      if(_pricings[i].price != defaultPricings![i].price) {
        isNotValid = true
      }
    }
    return isNotValid 
  }

  const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabledButton(true)
    ApiClient().put(`/api/tickets/ticket-pricings/update`,{pricings})
    .then((res) => {
      onClose()
      setAlert({
        success: true,
        message: "Harga berhasil diubah."
      })
    })
    .catch((err) => {
      console.log(err.response.data)
      onClose()
      setAlert({
        success: false,
        message: "Harga gagal diubah."
      })
    })
  }
  const changePrice = (pricing:Pricing) => {
    if(!pricings) return
    setPricings((prev) => {
      return prev!.map((item) => {
        if(item.id === pricing.id) {
          item.price = pricing.price
        }
        return item
      })
    })
  }
  return (
    <Content width={480} className="relative overflow-hidden" onClose={() => onClose()}>
    <Header title="Ubah Harga" onClose={() => onClose()}/>
      <form onSubmit={formSubmit} className="px-5">
        <Body className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 mb-1">
            <span className="font-medium">Harga Tiket</span>
            <span className="text-sm text-slate-800">
            Ubah harga tiket menggunakan mata uang rupiah (Rp).</span>
          </div>
            {!defaultPricings && (
              <div className="flex flex-col gap-10">
                <LoadingSkeleton/>
              </div>

            )}
            {(defaultPricings && pricings) && defaultPricings.map((item, i) => (
              <div key={item.id} className="flexBetween">
                <span>{item.type}</span>
                <FormControl className="!w-1/2">
                  <NumberInput
                  defaultValue={item.price}
                  value={pricings[i].price} 
                  onChange={(value) => changePrice({id:item.id, price: value})}
                  min={1000}
                  isRequired
                  >
                  <NumberInputField placeholder="Harga (Rupiah)" className="placeholder:!text-sm" />
                  </NumberInput>
                </FormControl> 
              </div>
            ))}
        </Body>
        <Footer 
        className="absolute bottom-0 right-0 left-0 flex justify-end items-center px-4 py-3 bg-white rounded-b-xl">
          <ButtonPrimary
          type="submit"
          disabled={disabledButton}
          className="!rounded-lg bg-blue-500 text-white"
          >Ubah</ButtonPrimary> 
        </Footer> 
      </form>
    </Content>
  )
}

const LoadingSkeleton = () => {
  return Array(4).fill(0).map((_,index) => (
    <div key={index} className="flexBetween">
      <Skeleton className="w-1/3 size-md" />
      <Skeleton className="w-1/3 size-md" />
    </div>  
    )
  )
}
export default ChangeTicketPrice
