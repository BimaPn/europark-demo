"use client"
import { useState } from "react"
import Modal, { Body, Content, Footer, Header } from "./Modal"
import { PiWarningCircle } from "react-icons/pi"


const useConfirm = ({ title = "Konfirmasi", label }: { title?: string; label: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [resolve, setResolve] = useState<((value: boolean) => void) | null>(null);

  const confirm = () =>
    new Promise<boolean>((resolve) => {
      setResolve(() => resolve);
      setIsOpen(true);
    });

  const handleConfirm = () => {
    resolve?.(true);
    setIsOpen(false);
  };

  const handleCancel = () => {
    resolve?.(false);
    setIsOpen(false);
  };

  const ConfirmationDialog = () => {
    return isOpen == false ? null : (
      <Modal defaultValue={true}>
        <Content width={384} onClose={handleCancel} className="!h-fit">
          <Header title={title} onClose={handleCancel}/>
          <Body className="flexCenter flex-col gap-2 -mt-2 px-1">
            <PiWarningCircle className="text-[72px]" />
            <span className="text-center">{label}</span>
          </Body> 
          <Footer className="flexCenter gap-3 px-6 py-4">
            <button 
            onClick={handleCancel} 
            className="w-24 py-1 rounded-lg border-2 border-gray-400">Tidak</button>
            <button
            onClick={handleConfirm}
            className="w-24 py-[6px] bg-blue-500 text-white rounded-lg">iya</button>
          </Footer>
        </Content>
      </Modal>
    )
  }
  return [ConfirmationDialog, confirm];
};

export default useConfirm;








