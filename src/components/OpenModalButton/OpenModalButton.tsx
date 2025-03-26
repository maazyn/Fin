import { ReactNode } from "react";
import { useModal } from "../../Context/Modal";

interface OpenModalButtonProps {
  modalComponent: ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
  onModalClose?: () => void;
}

const OpenModalButton: React.FC<OpenModalButtonProps> = ({
  modalComponent,
  buttonText,
  onButtonClick,
  onModalClose,
}) => {
  const context = useModal();

  if (!context) return null;

  const { setModalContent, setOnModalClose } = context;

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose); // Set the modal close callback
    setModalContent(modalComponent); // Set the modal content
    if (onButtonClick) onButtonClick(); // Call the optional button click callback
  };

  return <button className="buttonContainer2" onClick={onClick}>{buttonText}</button>;
};

export default OpenModalButton;
