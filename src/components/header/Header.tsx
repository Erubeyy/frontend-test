import { useState } from "react";
import AddUser from "../addUser/AddUser";
import CustomButton from "../commons/customButton/CustomButton";
import Modal from "../commons/modal/Modal";
import './Header.scss'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <div className="header">
      <Modal isOpen={showModal}>
        <AddUser closeModal={toggleModal} />
      </Modal>
      <div className="header__content" >
        <h2>Weather app / Alexis Erubey Cazares Valdez</h2>
        <CustomButton type="primary" content='Ingresar usuario' action={toggleModal} />
      </div>
    </div>
  )
}

export default Header;