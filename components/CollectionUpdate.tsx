"use client"
import { createContext, useContext, useEffect, useState } from "react"
import Modal, { Body, Content, Footer, Header } from "./ui/Modal"
import { defaultData } from "./CollectionCreate"
import ApiClient from "@/app/api/axios/ApiClient"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import ButtonPrimary from "./ui/ButtonPrimary"
import TextAreaExpand from "./ui/TextAreaExpand"
import ImagesInput, { EditOldImages, Preview, Trigger as ImagesTrigger } from "./ui/ImagesInput"
import { collectionContext } from "./provider/CollectionProvider"
import CollectionUpdateSkeleton from "@/components/skeleton/CollectionUpdateSkeleton"
import { AlertMessageProvider, alertMessageContext } from "./AlertMessage"

export const collectionUpdateContext = createContext<CollectionUpdateProvider | null>(null)

const CollectionUpdate = ({children}:{children:React.ReactNode}) => {
  const [id, setId] = useState<string|null>(null)
  return (
    <collectionUpdateContext.Provider value={{ id, setId }}>
      {children}
      <div className="relative z-[1000]">
      <Modal defaultValue>
        {id && <ModalContent id={id} onClose={() => setId(null)} />}
      </Modal>
      </div>

    </collectionUpdateContext.Provider>
  )
}

type Data = {
  data: CollectionUpdate,
  oldImages: OldImage[]
}

const ModalContent = ({id, onClose}:{id:string, onClose:() => void}) => {
  const [data, setData] = useState<Data|null>(null)

  useEffect(() => {
   ApiClient().get(`/api/collections/${id}/update/get`)
   .then((res) => {
      setData({
        data: {...res.data.collection,images:[],deletedImages:[],_method: "put"},
        oldImages: res.data.oldImages
      })
    })
   .catch((err) => {
      console.log(err.response.data)
    })
  },[])
  return (
  <Content width={512} onClose={() => onClose()} className="flex flex-col relative pb-20">
      <div>
        <Header title="Ubah Koleksi" onClose={() => onClose()}/>
      </div>
      {!data && <CollectionUpdateSkeleton />}
      {data && <FormUpdate defaultValue={data} id={id} />}
  </Content>
  )
}

type OldImage = {
  id: string,
  image: string
}

const FormUpdate = ({id, defaultValue}:{id:string, defaultValue: Data}) => {
  const [formData, setFormData] = useState<CollectionUpdate>(defaultValue.data)
  const [oldImages, setOldImages] = useState<OldImage[]>(defaultValue.oldImages)
  const [disabledButton, setDisabledButton] = useState<boolean>(true)
  const [errors, setErrors] = useState<CollectionErrors | null>() 
  const { updateCollection } = useContext(collectionContext) as CollectionProvider
  const { setId } = useContext(collectionUpdateContext) as CollectionUpdateProvider
  const { setAlert } = useContext(alertMessageContext) as AlertMessageProvider

  const isFormDataValid = () => {
    return formData.name === defaultValue.data.name &&
    formData.createdBy === defaultValue.data.createdBy &&
    formData.discovery_year === defaultValue.data.discovery_year &&
    formData.origin === defaultValue.data.origin &&
    formData.description === defaultValue.data.description &&
    (oldImages.length > 0 || formData.deletedImages.length > 0)
  }

  useEffect(() => {
    setDisabledButton(isFormDataValid())
  },[formData])

  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabledButton(true)
    ApiClient().post(`/api/collections/${id}/update`,formData,{
      headers: {"Content-Type":"multipart/form-data"}
    })
    .then((res) => {
      setId(null)
      setAlert({
        success: true,
        message: "Koleksi berhasil di ubah."
      })
      updateCollection(res.data.collection)
    })
    .catch((err) => {
      setDisabledButton(false) 
      setErrors(err.data.errors)
    })
  }

  const onChange = (field: keyof CollectionCreate, value: string|number|File[]) => {
    setFormData((prev) => {
      return {...prev,[field]:value}
    })
  }
  const removeOldImage = (id:string) => {
    setFormData((prev) => {
      return {...prev, deletedImages: [id,...prev.deletedImages]} 
    })
  }
  return (
     <form onSubmit={submitForm} className="mt-2 overflow-y-auto px-6 rounded-xl">
        <Body className="flex flex-col gap-4">
          <FormControl isInvalid={errors?.name}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Nama Koleksi</FormLabel>
            <Input
            type='text'
            value={formData.name}
            onChange={(e) => onChange('name',e.target.value)}
            isRequired
            placeholder='Name'
            />
            {errors?.name && (
              <FormErrorMessage>{errors?.name[0]}</FormErrorMessage>
            )}
          </FormControl>    
          <FormControl isInvalid={errors?.createdBy}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Dibuat Oleh</FormLabel>
            <Input
            type='text'
            value={formData.createdBy}
            onChange={(e) => onChange('createdBy',e.target.value)}
            isRequired
            placeholder='Created By'
            />
            {errors?.createdBy && (
              <FormErrorMessage>{errors?.createdBy[0]}</FormErrorMessage>
            )}
          </FormControl>    
          <FormControl isInvalid={errors?.discovery_year}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Tahun Pembuatan</FormLabel>
            <Input
            type='text'
            value={formData.discovery_year}
            onChange={(e) => onChange('discovery_year',e.target.value)}
            isRequired
            placeholder='Invented Year'
            />
            {errors?.discovery_year && (
              <FormErrorMessage>{errors?.discovery_year[0]}</FormErrorMessage>
            )}
          </FormControl> 
          <FormControl isInvalid={errors?.origin}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Tempat Asal</FormLabel>
            <Input
            type='text'
            value={formData.origin}
            onChange={(e) => onChange('origin',e.target.value)}
            isRequired
            placeholder='Origin'
            />
            {errors?.origin && (
              <FormErrorMessage>{errors?.origin[0]}</FormErrorMessage>
            )}
          </FormControl> 
          <FormControl>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Foto Koleksi</FormLabel>
            <ImagesInput value={formData.images} onChange={(images) => onChange('images',images)}>
              <Preview>
                <EditOldImages images={oldImages} onRemove={(id) => removeOldImage(id)} /> 
              </Preview>
              <ImagesTrigger className="px-3 py-[6px] rounded-lg bg-blue-500 text-white">
                Tambah Foto
              </ImagesTrigger>
            </ImagesInput>
          </FormControl> 
          <FormControl isInvalid={errors?.description}>
            <FormLabel
            fontWeight={400} fontSize={15} className='font-normal text-xs'>Deskripsi</FormLabel>
            <TextAreaExpand
            value={formData.description}
            onChange={(e) => onChange('description',e.target.value)}
            placeholder="Description"
            className="px-4 py-[6px] border border-slate-300 rounded"
            />
            {errors?.description && (
              <FormErrorMessage>{errors?.description[0]}</FormErrorMessage>
            )}
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

export default CollectionUpdate
