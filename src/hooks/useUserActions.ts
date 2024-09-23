import {type User, addUser, deleteUserById } from "../redux/users/slice";
import { useAppDispatch } from "./store"

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const handleAddUser = ({name, imageId, latitud, longitud}: User) => {
    dispatch(addUser({name, imageId, latitud, longitud}))
  }

  const handleDeleteUserById = (id: string) => {
    dispatch(deleteUserById(id))
  }

  return {
    handleAddUser,
    handleDeleteUserById
  }
}