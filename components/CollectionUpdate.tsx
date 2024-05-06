"use client"
import { createContext, useContext, useEffect, useState } from "react"
import Modal, { Body, Content, Footer, Header } from "./ui/Modal"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import ButtonPrimary from "./ui/ButtonPrimary"
import { useCollections } from "./provider/CollectionsProvider"
import TextAreaExpand from "./ui/TextAreaExpand"
import ImagesInput, { Preview, Trigger } from "./ui/ImagesInput"
import { useAlert } from "./AlertMessage"

const collectionUpdateContext = createContext<CollectionUpdateProvider | null>(null)

const CollectionUpdate = ({children, onUpdated}:{children:React.ReactNode, onUpdated: (collection: Collection) => void}) => {
  const [id, setId] = useState<string|null>(null)

  const onClose = () => {
    setId(null)
  }
  return (
    <collectionUpdateContext.Provider value={{ id, setId }}>
      {children}
      <div className="relative z-[1000]">
      <Modal defaultValue>
        {id && (
          <Content width={512} onClose={() => onClose()} className="flex flex-col relative pb-20">
              <div>
                <Header title="Ubah Koleksi" onClose={() => onClose()}/>
              </div>
              <FormUpdate id={id} onUpdated={(collection) => onUpdated(collection)} />
          </Content>
        )}
      </Modal>
      </div>

    </collectionUpdateContext.Provider>
  )
}

type OldImage = {
  id: string,
  image: string
}

const FormUpdate = ({id, onUpdated}:{id:string, onUpdated: (collection:Collection) => void}) => {
  const { findCollection, updateCollection } = useCollections()
  const [formData, setFormData] = useState({...findCollection(id)})
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const { setAlert } = useAlert()
  const { setId } = useCollectionUpdate()
  const isFormDataValid = () => {
    return formData.images!.length < 1
  }
  
  useEffect(() => {
    if(!formData) return;
      setDisabledButton(isFormDataValid())
  },[formData])

  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!formData) return;

    updateCollection(formData as Collection)
    onUpdated(formData as Collection)
    setId(null)
    setAlert({
      success: true,
      message: "Koleksi berhasil di update"
    })
  }
  const onChange = (field: keyof CollectionCreate, value: string|number|string[]) => {
    setFormData((prev) => {
      return {...prev,[field]:value}
    })
  }
  return formData && (
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
            value={formData.images as string[]} 
            onChange={(images) => onChange('images',images)}
            >
              <Preview />
              <Trigger className="px-3 py-[6px] rounded-lg bg-blue-500 text-white">
                Tambah Foto
              </Trigger>
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
          >Update</ButtonPrimary> 
        </Footer> 
      </form>
  )
}

export const useCollectionUpdate = () => {
  return useContext(collectionUpdateContext) as CollectionUpdateProvider
}

export default CollectionUpdate
