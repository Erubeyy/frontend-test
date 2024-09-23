import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  name: string;
  imageId: number;
  latitud: number;
  longitud: number;
}

export type UserWithId = User & {
  id: string;
}

const initialState: UserWithId[] = [
  {
    id: '1',
    name: 'Jose Manuel Perez',
    imageId: 2,
    latitud: 20.6637808,
    longitud: -103.4315425
  },
  {
    id: '2',
    name: 'Jesus Adrian Osuna',
    imageId: 6,
    latitud: 23.6637808,
    longitud: -102.4315425
  },
  {
    id: '3',
    name: 'Amanda Nicole Gonzalez',
    imageId: 1,
    latitud: 19.6637808,
    longitud: -101.4315425
  },
  {
    id: '4',
    name: 'Hector Javier Ibarra',
    imageId: 8,
    latitud: 29.6637808,
    longitud: -111.4315425
  },
  {
    id: '5',
    name: 'Isela Maria Iturbide',
    imageId: 7,
    latitud: 12.6637808,
    longitud: -106.4315425
  },
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<string>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    }
  }
})

export const { addUser, deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
