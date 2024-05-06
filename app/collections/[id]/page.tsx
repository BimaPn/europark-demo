import CollectionDetail from "@/components/CollectionDetail"
import axios from "axios"

const Page = async ({params}:{params : {id:string}}) => {
  let error
  const collection = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/collections/${params.id}/get`)
  .then((res) => {
    return res.data.collection
  })
  .catch((err) => {
    error = err.response.status
  })
  return (
    <>
 
      {error == 404 && (
        <p>not found</p> 
      )}
      {collection && (
        <CollectionDetail
        name={collection.name as string} 
        createdBy={collection.createdBy as string}
        origin={collection.origin as string}
        discover_year={collection.discover_year as string} 
        description={collection.description as string}
        images={collection.resultImages as string[]}
        />
      )}
    </>
  )
}

export default Page
