import CollectionsData from "@/components/dashboard/CollectionsData"
import CollectionProvider from "@/components/provider/CollectionProvider"
import { PageTitle } from "@/layouts/DashboardLayout"

const Page = () => {
  return (
  <CollectionProvider>
    <PageTitle title="Koleksi" />
    <section className="bg-white min-h-[89.5vh] rounded-lg px-4 py-4 overflow-y-scroll pb-16 relative">
      <CollectionsData />  
    </section>
  </CollectionProvider>
  )
}

export default Page
