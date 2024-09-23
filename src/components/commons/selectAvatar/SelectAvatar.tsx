import { useEffect, useState } from 'react';
import { Images } from '../../../data/images';
import './SelectAvatar.scss'

type SelectAvatarProps = {
  label?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number;
}

const SelectAvatar = ({ label, name, onChange, value }: SelectAvatarProps) => {
  const [pickedAvatar, setPickedAvatar] = useState<string | null>(null);

  useEffect(() => {
    if (value) {
      const searchAvatar = Images.find(image => image.id === +value);
      setPickedAvatar(searchAvatar!.largeCircleImage);
    } else {
      setPickedAvatar(null);
    }
  }, [value])

  return (
    <div className="selectAvatar">
      {pickedAvatar &&
        <img src={pickedAvatar!} alt="Picked Avatar Image" />}
      <div className="selectAvatar__input">
        {label && <label className="selectAvatar__label" htmlFor={name}>{label}</label>}
        <select
          id={name}
          name={name}
          className="selectAvatar__select"
          onChange={onChange}
          value={value}
        >
          {Images.map((image) => (
            <option key={image.id} value={image.id}>
              {image.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectAvatar;
