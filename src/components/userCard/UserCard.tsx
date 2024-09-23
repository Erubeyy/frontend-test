import { type UserWithId } from '../../redux/users/slice';
import { Images } from '../../data/images';
import { MarkerIcon } from '../commons/Icons';
import './UserCard.scss'

type UserCardProps = UserWithId & {
  children?: React.ReactNode;
}

const UserCard = ({ id, name, imageId, latitud, longitud, children }: UserCardProps) => {
  const profileImages = Images.find(image => image.id === imageId);

  return (
    <div className='userCard'>
      <img className='userCard__largeImg' src={profileImages?.largeImage} alt="User Large Profile Image " />
      <img className='userCard__smallImg' src={profileImages?.smallImage} alt="User Small Profile Image " />
      <div className='userCard__info' >
        <h3>{name}</h3>
        <div className="userCard__info-location">
          <MarkerIcon />
          <span className='body-text'>{`${latitud}, ${longitud}`}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default UserCard;