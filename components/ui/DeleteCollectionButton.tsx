"use client"
import ButtonDelete from "./ButtonDelete"
import useConfirm from "./Confirm"

const DeleteCollectionButton = ({onDelete}:{onDelete: () => void}) => {
  const [ConfirmDialog, confirm] = useConfirm({
    label: "Yakin ingin menghapus koleksi ini ?"
  })

  const click = async () => {
    const isTrue = await confirm()
    isTrue && onDelete()
  }

  return (
    <>
      <ButtonDelete callback={() => click()} />
      <ConfirmDialog />
    </>
  )
}

export default DeleteCollectionButton
