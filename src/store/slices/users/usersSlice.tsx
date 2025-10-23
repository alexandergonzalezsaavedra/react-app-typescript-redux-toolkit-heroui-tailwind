import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Column {
  name: string;
  uid: string;
}

export interface User {
  id: string;
  name: string;
  status: boolean;
  avatar: string;
  email: string;
}

export interface UsersState {
  columns: Column[];
  users: User[];
}

const initialState: UsersState = {
  columns: [
    { name: 'USUARIO', uid: 'user' },
    { name: 'ESTADO', uid: 'status' },
    { name: 'ACCIONES', uid: 'actions' },
  ],
  users: [
    {
      id: '1',
      name: 'Tony Reichert',
      status: true,
      avatar: '',
      email: 'tony.reichert@example.com',
    },
    {
      id: '2',
      name: 'Tony Reichert',
      status: false,
      avatar: '',
      email: 'tony.reichert@example.com',
    },
  ],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<User['id']>) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
});

export const { deleteUserById } = userSlice.actions;
export default userSlice.reducer;
