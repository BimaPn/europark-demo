import Link from "next/link"
import ErrorIcon from "../icons/ErrorIcon"
import ResponseMessageAdmin from "./ResponseMessageAdmin"

const TicketNotFound = () => {
  return (
    <ResponseMessageAdmin 
    type="error"
    message="Tiket Tidak Ditemukan" 
    subMessage="Mohon untuk periksa kembali ID Tiket yang akan di verifikasi"
    />
  )
}

export default TicketNotFound
