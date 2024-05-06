"use client"
import { useState } from 'react'
import CollectionImagesPreview from './CollectionImagesPreview'
import { useCollections } from './provider/CollectionsProvider'

const CollectionDetail = ({collectionId}:{collectionId: string}) => {
  const { findCollection } = useCollections()
  const [collection, setCollection] = useState(findCollection(collectionId))
  return collection && (
    <section className='boxWidth min-h-[70vh] flex flex-col-reverse ss:flex-row ss:justify-between gap-2 ss:gap-6 sm:gap-12 md:gap-16 relative ss:!mt-5'>
      <div className="basis-full ss:basis-1/2 sm:basis-[55%]">
        <div className='flex flex-col gap-2'>
          <span className='text-slate-700 font-medium -mb-[6px]'>Koleksi</span>
          <h1 className='font-semibold text-4xl tracking-wide'>{collection.name}</h1>
          <span className='font-medium text-lg'>{collection.createdBy}, {collection.origin}, {collection.discovery_year}</span>
        </div>
        <div className='mt-6'>
          <p className='text-justify tracking-wide leading-7'>
            {collection.description} 
          </p>
        </div>
      </div>
      <div className="basis-full ss:basis-1/2 sm:basis-[45%]">
        <CollectionImagesPreview images={collection.images} />
      </div>
    </section>
  )
}

export default CollectionDetail
