import { useEffect } from 'react';
import './Modal.scss'

type ModalProps = {
  isOpen: boolean,
  children: React.ReactNode,
  width?: string
}

const Modal = ({ isOpen, children, width = '100%' }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div style={{ width }} className="modal">
        {children}
      </div>
    </div>
  )
}

export default Modal;