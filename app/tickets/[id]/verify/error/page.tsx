import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"

const Page = () => {
  return (
    <ResponseMessageAdmin
    type="error"
    message="Terjadi Kesalahan"
    subMessage={`Status tiket sudah kadaluarsa.`} 
    />
  )
}

export default Page
