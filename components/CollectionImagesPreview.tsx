"use client"
import { useState } from "react"
import RoundedImage from "./ui/RoundedImage"

const CollectionImagesPreview = ({images}:{images:string[]}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  return (
      <div className="w-full h-fit flex flex-col gap-4 sticky top-10">
        <RoundedImage src={images[selectedImage]} alt='anjay' className='!w-full !aspect-video ss:!aspect-[4/3] !rounded-lg' />
        <div className='w-full flex items-center gap-5 overflow-x-auto pb-4 !box-border'>
          {images.map((image, i) => (
            <button 
            key={i}
            onClick={() => setSelectedImage(i)}
            className={`min-w-[20%] rounded-lg ${(selectedImage === i) && "border-2 border-primary p-[2px]"}`}
            >
              <RoundedImage src={image} alt={image} className={`!w-full !aspect-video ss:!aspect-[4/3] !rounded-md`} />
            </button>
          ))} 
        </div>  
      </div>
  )
}

export default CollectionImagesPreview
