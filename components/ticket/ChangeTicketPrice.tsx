"use client"
import { useState } from "react"
import Modal, { Body, Footer, Header, Content } from "../ui/Modal"
import { TbEdit } from "react-icons/tb"
import ButtonPrimary from "../ui/ButtonPrimary"
import { FormControl, NumberInput, NumberInputField } from "@chakra-ui/react"
import { useAlert } from "../AlertMessage"
import { usePricing } from "../provider/PriceProvider"

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

const FormContent = ({onClose}:{onClose:() => void}) => {
  const { prices, changePrices } = usePricing()
  const [pricings, setPricings] = useState<Pricing[]>([...prices])
  const { setAlert } = useAlert()

  const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    changePrices(pricings)
    onClose()
    setAlert({
      success: true,
      message: "Berhasil mengubah harga."
    })
  }
  const changePrice = (id: string, price: number|string) => {
    setPricings((prev) => {
      return prev.map((item) => {
        if(item.id === id) {
          item.price = price
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
 
            {prices.map((item, i) => (
              <div key={item.id} className="flexBetween">
                <span>{item.type}</span>
                <FormControl className="!w-1/2">
                  <NumberInput
                  defaultValue={item.price}
                  value={pricings[i].price} 
                  onChange={(value) => changePrice(item.id as string, value)}
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
          className="!rounded-lg bg-blue-500 text-white"
          >Ubah</ButtonPrimary> 
        </Footer> 
      </form>
    </Content>
  )
}

export default ChangeTicketPrice
