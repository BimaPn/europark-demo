import CollectionDetail from "@/components/CollectionDetail"

const Page = async ({params}:{params : {id:string}}) => {
  return (
    <>
      <CollectionDetail
      collectionId={params.id}
      />
    </>
  )
}

export default Page
