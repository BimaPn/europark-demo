"use client"
import Modal, { Trigger,Content,Header,Body } from "./ui/Modal"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import { useRouter } from "next/navigation"
import { Spinner } from "@chakra-ui/react"
import { MdQrCodeScanner } from "react-icons/md"

const TicketScan = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal defaultValue={true}> 
      <button
      onClick={() => setIsOpen(prev => !prev)}
      className="flexCenter gap-1 bg-transparent border border-blue-400 text-blue-500 p-[6px] ss:p-[7px] rounded-lg">
        <MdQrCodeScanner className="text-[20px]" />
      </button>
      {isOpen && <ModalContent onClose={() => setIsOpen(false)} />}
    </Modal>
  )
}

const ModalContent = ({onClose}:{onClose:()=>void}) => {
  const [isDone,setIsDone] = useState<boolean>(false)
  const [error,setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
  const scanner = new Html5QrcodeScanner('reader',{
    qrbox: {
      width: 380,
      height: 380
    },
    fps: 5,
  },false)

  const success = (result:string) => {
    const checkQr = result.includes(`${process.env.NEXT_PUBLIC_APP_NAME}/tickets`)
    if(!checkQr) {
      setError(result)
      return
    }
    router.push(result.toString())
    scanner.clear()
    setIsDone(true)
    setError(null)
  }
  const error = (err : any) => {
    console.log(err)
  }
  scanner.render(success, error)
  },[])
  return (
    <Content width={512} className="" onClose={() => onClose()}>
      <Header title="Scan Tiket" onClose={() => onClose()}/>
      <Body className="px-4">
        <div className="flex flex-col items-center mb-4">
          <Image
          width={400}
          height={400}
          className="w-[150px] aspect-square"
          src={`/icons/ticket.png`} 
          alt={`ticket icon`}
          draggable={false} 
          />
          <span className="font-medium text-lg mt-4">Scan Tiket</span>
        </div>
        <div className="flexCenter flex-col">
          {error && <span className="text-red-500 text-center">Tiket tidak valid, mohon masukan tiket yang valid.</span>}
          {isDone ? (
            <div className="my-6 flexCenter flex-col gap-3">
              <Spinner size={`lg`} className="text-blue-500"/>
              <span className="text-center">Anda sedang dialihkan ke halaman verifikasi tiket, tunggu sebentar...</span>
            </div>
          ) : (
            <div id="reader"></div>
          )}
        </div>  
      </Body>
    </Content>
  )
}

export default TicketScan
