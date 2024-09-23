import { useState } from 'react';
import FormInput from '../../commons/inputs/FormInput';
import SelectAvatar from '../../commons/selectAvatar/SelectAvatar';
import { useUserActions } from '../../../hooks/useUserActions';
import './AddUserForm.scss'

const AddUserForm = () => {
  const { handleAddUser } = useUserActions();
  const initialFormData = {
    userName: '',
    image: 1,
    latitud: '',
    longitud: '',
  }
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddUser({
      name: formData.userName,
      imageId: +formData.image,
      latitud: +formData.latitud,
      longitud: +formData.longitud,
    })
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='addUserForm'>
        <SelectAvatar
          name='image'
          label='Selecciona tu avatar'
          value={formData.image}
          onChange={handleInputChange}
        />
        <FormInput
          type='text'
          name='userName'
          value={formData.userName}
          onChange={handleInputChange}
          placeholder='Nombre de usuario'
          label='Usuario'
        />
        <div className='addUserForm__location'>
          <FormInput
            type='text'
            name='latitud'
            value={formData.latitud}
            onChange={handleInputChange}
            placeholder='Ingresa tu latitud'
            label='Latitud'
          />
          <FormInput
            type='text'
            name='longitud'
            value={formData.longitud}
            onChange={handleInputChange}
            placeholder='Ingresa tu longitud'
            label='Longitud'
          />
        </div>
      </div>
      <button className='submit' type='submit'>Añadir usuario</button>
    </form>
  )
}

export default AddUserForm;