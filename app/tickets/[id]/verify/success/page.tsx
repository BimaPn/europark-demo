import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"

const Page = () => {
  return (
    <ResponseMessageAdmin
    type="success"
    message="Berhasil di Verifikasi"
    subMessage={"Tiket telah berhasil diverifikasi."} 
    />
  )
}

export default Page
