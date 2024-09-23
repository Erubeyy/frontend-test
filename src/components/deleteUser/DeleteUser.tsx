import { UserWithId } from '../../redux/users/slice';
import CustomButton from '../commons/customButton/CustomButton';
import UserCard from '../userCard/UserCard';
import { useUserActions } from '../../hooks/useUserActions';
import './DeleteUser.scss'

type DeleteUserProps = {
  user: UserWithId;
  closeModal: () => void;
}

const DeleteUser = ({ user, closeModal }: DeleteUserProps) => {
  const { handleDeleteUserById } = useUserActions();

  const handleUserDelete = () => {
    handleDeleteUserById(user.id);
    closeModal();
  }

  return (
    <div className='deleteUser'>
      <h3>Eliminar usuario</h3>
      <UserCard {...user} />
      <div className='deleteUser__actions'>
        <h4 style={{ alignSelf: 'center' }}>¿Deseas eliminar el usuario?</h4>
        <div className='deleteUser__actions-btns' >
          <CustomButton type='primary' content='Eliminar usuario' action={handleUserDelete} />
          <CustomButton type='secondary' content='Mantener usuario' action={closeModal} />
        </div>
      </div>
    </div>
  )
}

export default DeleteUser;