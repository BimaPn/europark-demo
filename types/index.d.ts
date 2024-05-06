interface InputImages {
    value : string[]
    onChange:(files:string[]) => void
    children : React.ReactNode
    className?:string
}
interface ImagesInputContext {
    value:string []
    onChange:(files:string[]) => void
    removeImage:(index:number) => void
}
interface Paginate {
  lastPage: number
}
interface Pricing {
  id: number | string
  type: string
  price: number|string
}
