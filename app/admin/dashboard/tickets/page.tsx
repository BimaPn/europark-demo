import TicketData from "@/components/dashboard/TicketData"
import { PageTitle } from "@/layouts/DashboardLayout"

const Page = () => {
  return (
  <>
    <PageTitle title="Tiket" />
    <section className="bg-white min-h-[89.5vh] pb-16 rounded-lg px-4 py-4 overflow-y-scroll overflow-x-hidden relative">
      <TicketData />  
    </section>
  </>
  )
}


export default Page
