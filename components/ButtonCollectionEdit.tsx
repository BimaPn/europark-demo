"use client"
import { useCollectionUpdate } from "./CollectionUpdate"
import ButtonEdit from "./ui/ButtonEdit"

const ButtonCollectionEdit = ({collectionId}:{collectionId: string}) => {
  const { setId } = useCollectionUpdate()
  return (
    <ButtonEdit callback={() => setId(collectionId)} />
  )
}

export default ButtonCollectionEdit
