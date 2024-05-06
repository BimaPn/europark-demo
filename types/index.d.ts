interface InputImages {
    value : File[]
    onChange:(files:File[]) => void
    children : React.ReactNode
    className?:string
}
interface ImagesInputContext {
    value:File []
    onChange:(files:File[]) => void
    removeImage:(index:number) => void
    imagePreviews ?: string[]
    setImagePreviews:Dispatch<SetStateAction<string []>>
}
interface Paginate {
  lastPage: number
}
