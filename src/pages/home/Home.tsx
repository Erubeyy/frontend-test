import { useAppSelector } from "../../hooks/store";
import UserCard from "../../components/userCard/UserCard";
import './Home.scss'
import CustomButton from "../../components/commons/customButton/CustomButton";
import { TrashIcon } from "../../components/commons/Icons";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/commons/modal/Modal";
import DeleteUser from "../../components/deleteUser/DeleteUser";
import { useState } from "react";
import { UserWithId } from "../../redux/users/slice";

const Home = () => {
  const navigate = useNavigate();
  const users = useAppSelector(state => state.users);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserWithId | null>(null);
  const toggleModal = (user: UserWithId) => {
    setSelectedUser(user);
    setShowModal(prev => !prev);
  }

  const handleRedirect = (id: string) => {
    navigate(`/user/${id}`)
  }

  return (
    <>
      <Modal isOpen={showModal} width="auto">
        <DeleteUser closeModal={() => setShowModal(prev => !prev)} user={selectedUser!} />
      </Modal>
      <div className="home">
        <div className="home__topContent" >
          <h1>Usuarios registrados</h1>
          <span className="body-text">
            Lorem ipsum dolor sit amet consectetur. Maecenas mauris massa magnis
            magna adipiscing proin. Vulputate facilisi ornare blandit eu eleifend at.
          </span>
        </div>
        <div className="home__userCards">
          {users.map(user =>
            <UserCard key={user.id} {...user} >
              <div className='home__userCards-actions' >
                <CustomButton type='secondary' content='Detalles' action={() => handleRedirect(user.id)} />
                <CustomButton type='tertiary' content={<TrashIcon />} circular action={() => toggleModal(user)} />
              </div>
            </UserCard>
          )}
        </div>
      </div>
    </>

  )
}

export default Home;