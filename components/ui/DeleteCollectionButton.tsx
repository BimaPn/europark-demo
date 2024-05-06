// import useConfirm from "./ui/Confirm"

import ButtonDelete from "./ButtonDelete"

const DeleteCollectionButton = ({onDelete}:{onDelete:() => void}) => {
  // const [ConfirmDialog, confirm] = useConfirm({
  //   label: "Yakin ingin menghapus koleksi ini ?"
  // })
  //
  const click = async () => {
  //   const isTrue = await confirm()
  //   isTrue && onDelete()
  }

  return (
    <>
      <ButtonDelete callback={() => click()} />
    </>
  )
}

export default DeleteCollectionButton
