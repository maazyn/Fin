import { useRef, useState, useContext, createContext, ReactNode } from "react";
import ReactDOM from 'react-dom';
import "./Modal.css";

interface ModalContextType {
  setModalContent: (content: ReactNode) => void;
  setOnModalClose: (callback: () => void) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [onModalClose, setOnModalClose] = useState<() => void>(() => () => {});

  const closeModal = () => {
    if (typeof onModalClose === "function") {
      onModalClose();
    }
    setModalContent(null);
    setOnModalClose(() => () => {});
  }

    const contextValue = {
        modalRef,
        modalContent,
        setModalContent,
        setOnModalClose,
        closeModal
    }

    return (
        <>
          <ModalContext.Provider value={contextValue}>
            {children}
          </ModalContext.Provider>
          <div ref={modalRef} />
        </>
    );
}


export function Modal() {
  const context = useContext(ModalContext);
  if (!context) return null;
  
  const { modalRef, modalContent, closeModal } = useContext(ModalContext);
  if (!modalRef || !modalRef.current || !modalContent) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="modal-content">{modalContent}</div>
    </div>,
    modalRef.current
  );
}

export const useModal = () => useContext(ModalContext);
