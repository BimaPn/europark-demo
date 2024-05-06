
interface CollectionProvider {
  collections: Collection[] | null
  setCollections: Dispatch<SetStateAction<Collection[] | null>>
  addCollection: (collection:Collection) => void
  updateCollection: (collection:Collection) => void
  deleteCollection: (id:string) => void
  paginate: Paginate | null
  setPaginate: Dispatch<SetStateAction<Paginate | null>>
}

interface Collection {
  id: string
  name: string
  createdBy: string
  discovery_year: string
  origin: string
  images: string[]
  description: string
}

interface CollectionCreate {
  name: string
  createdBy: string
  discovery_year: string 
  origin: string 
  images: string[] 
  description: string
}

interface CollectionErrors {
  name?: Array,
  createdBy?: Array,
  discovery_year?: Array
  origin ?: Array
  description?: Array
}

interface CollectionUpdateProvider {
  id: string | null
  setId: Dispatch<SetStateAction<string | null>>
}

interface DeletedImages {
  id: string
  image: string
}

type CollectionsContext = {
  collections: Collection[]
  addCollection: (collection: Collection) => void
  updateCollection: (collection: Collection) => void
  findCollection: (collectionId: string) => Collection | null
  searchCollections: (query: string) => Collection[]
  deleteCollection: (collectionId: string) => void
}

