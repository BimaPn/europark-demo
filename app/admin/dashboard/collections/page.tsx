import CollectionsData from "@/components/dashboard/CollectionsData"
import { PageTitle } from "@/layouts/DashboardLayout"

const Page = () => {
  return (
  <>
    <PageTitle title="Koleksi" />
    <section className="bg-white min-h-[89.5vh] ss:rounded-lg px-4 py-4 overflow-y-scroll pb-16 relative">
      <CollectionsData />  
    </section>
  </>
  )
}

export default Page
