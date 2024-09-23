import CustomButton from "../commons/customButton/CustomButton";
import { CloseIcon } from "../commons/Icons";
import AddUserForm from "./addUserForm/AddUserForm";
import './AddUser.scss'

type AddUserProps = {
  closeModal: () => void;
}

const AddUser = ({ closeModal }: AddUserProps) => {
  return (
    <div className="addUser">
      <div className="addUser__cancel">
        <CustomButton type='tertiary' content={<CloseIcon />} circular action={closeModal} />
      </div>
      <div className="addUser__content">
        <div className="addUser__content-left">
          <h3 style={{ color: '#18181B' }}>Añadir un nuevo usuario</h3>
          <AddUserForm />
        </div>
        <div className="addUser__content-right">
          <img src='../../../src/assets/map-image.png' alt="Map Image" className="mapImg" />
        </div>
      </div>
    </div>
  )
}

export default AddUser;