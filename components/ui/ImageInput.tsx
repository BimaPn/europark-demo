'use client'
import Image from "next/image"
import { useRef,useState } from "react"
import RoundedImage from "./RoundedImage"

const ImageInput = ({onChange}:{onChange : (image:string)=>void}) => {

  const fileInput = useRef<HTMLInputElement>(null)
  const [imagePreview,setImagePreview] = useState<string>("")
  const changeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const selectedFile = fileInput.current!.files![0]
      if (selectedFile) {
          const blob = URL.createObjectURL(selectedFile)
          if(onChange){
            onChange(blob)
          }
          setImagePreview(blob)
      }
  }
  const openFile = (e:React.MouseEvent) => {
      e.preventDefault()
      fileInput.current?.click()
  }
  return (
    <>
      {imagePreview && (
      <RoundedImage 
      src={imagePreview}
      alt="identity card"
      className="!rounded !w-28 mb-3"
      />
      )}
        <input ref={fileInput} type="file" accept="image/*"  onChange={changeImage} className="hidden" />
        <button onClick={openFile} className="px-3 py-1 text-sm rounded text-white bg-blue-600">
            {imagePreview ? "Ubah foto" : "Pilih foto"}
        </button>
    </>
  )
}

export default ImageInput
