import { useContext, useEffect, useState } from "react"
import Modal, { Body, Content, Header, Trigger, Footer, modalContext, ModalProvider } from "./ui/Modal"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import ImagesInput, {Trigger as ImagesTrigger, Preview} from "./ui/ImagesInput"
import TextAreaExpand from "./ui/TextAreaExpand"
import { IoMdAdd } from "react-icons/io"
import { AlertMessageProvider, alertMessageContext } from "./AlertMessage"
import ButtonPrimary from "./ui/ButtonPrimary"
import { useCollections } from "./provider/CollectionsProvider"

const CollectionCreate = () => {
  return (
    <Modal> 
      <Trigger className="flexCenter bg-transparent border border-blue-400 text-blue-500 px-2 ss:px-3 py-[7px] ss:py-2 rounded-lg text-sm ss:text-[15px]">
        <span className="text-center -mt-[2px]">Buat koleksi</span>
      </Trigger>
      <FormContent />
    </Modal>
  )
}
export const defaultData = {
    name: "",
    createdBy: "",
    discovery_year: "",
    origin: "",
    images: [],
    description: ""
  }

const FormContent = () => {  
  const [formData, setFormData] = useState<CollectionCreate>(defaultData)
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const { toggleModal } = useContext(modalContext) as ModalProvider
  const { setAlert } = useContext(alertMessageContext) as AlertMessageProvider
  const { addCollection } = useCollections()

  const isFormDataNotEmpty = () => {
    return formData.name && formData.createdBy && formData.origin && formData.discovery_year && formData.description 
    && formData.images.length > 0
  }
  useEffect(() => {
    setDisabledButton(isFormDataNotEmpty() ? false : true)
  },[formData])

  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newCollection = { 
      id: `${Date.now}`,
      ...formData
    }
    addCollection(newCollection)
    setFormData(defaultData)
    toggleModal()
    setAlert({
      success: true,
      message: "Koleksi berhasil ditambahkan."
    })
  }
  const onChange = (field: keyof CollectionCreate, value: any) => {
    setFormData((prev) => {
      return {...prev,[field]:value}
    })
  }
  return (
    <Content width={512} onClose={() => setFormData(defaultData)} className="flex flex-col relative pb-20">
      <div>
        <Header title="Buat Koleksi" onClose={() => setFormData(defaultData)}/>
      </div>
      <form onSubmit={submitForm} className="mt-2 overflow-y-auto px-6 rounded-xl">
        <Body className="flex flex-col gap-4">
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Nama Koleksi</FormLabel>
            <Input
            type='text'
            value={formData.name}
            onChange={(e) => onChange('name',e.target.value)}
            isRequired
            placeholder='Name'
            />
          </FormControl>    
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Dibuat Oleh</FormLabel>
            <Input
            type='text'
            value={formData.createdBy}
            onChange={(e) => onChange('createdBy',e.target.value)}
            isRequired
            placeholder='Created By'
            />
          </FormControl>    
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Tahun Pembuatan</FormLabel>
            <Input
            type='text'
            value={formData.discovery_year}
            onChange={(e) => onChange('discovery_year',e.target.value)}
            isRequired
            placeholder='Invented Year'
            />
          </FormControl> 
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Tempat Asal</FormLabel>
            <Input
            type='text'
            value={formData.origin}
            onChange={(e) => onChange('origin',e.target.value)}
            isRequired
            placeholder='Origin'
            />
          </FormControl> 
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Foto Koleksi</FormLabel>
            <ImagesInput 
            value={formData.images} 
            onChange={(images) => onChange('images',images)}>
              <Preview />
              <ImagesTrigger className="px-3 py-[6px] rounded-lg bg-blue-500 text-white text-sm -mt-1">
                Tambah Foto
              </ImagesTrigger>
            </ImagesInput>
          </FormControl> 
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Deskripsi</FormLabel>
            <TextAreaExpand
            value={formData.description}
            onChange={(e) => onChange('description',e.target.value)}
            placeholder="Description"
            className="px-4 py-[6px] border border-slate-300 rounded"
            />
          </FormControl> 
        </Body>
        <Footer className="absolute bottom-0 right-0 left-0 flex justify-end items-center px-4 py-3 bg-white rounded-b-xl">
          <ButtonPrimary
          type="submit"
          disabled={disabledButton}
          className="!rounded-lg bg-blue-500 text-white"
          >Submit</ButtonPrimary> 
        </Footer> 
      </form>
    </Content>
  )
}

export default CollectionCreate
