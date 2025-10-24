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

const DEFAULT_STATE = [
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
];

const initialStateUsers = () =>
  (() => {
    const persistedStateUsers = localStorage.getItem('__users__redux__state');
    if (persistedStateUsers) {
      return JSON.parse(persistedStateUsers).users.users;
    } else {
      return DEFAULT_STATE;
    }
  })();

const initialState: UsersState = {
  columns: [
    { name: 'USUARIO', uid: 'user' },
    { name: 'ESTADO', uid: 'status' },
    { name: 'ACCIONES', uid: 'actions' },
  ],
  users: initialStateUsers(),
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (
      state,
      action: PayloadAction<Pick<User, 'name' | 'email'>>
    ) => {
      const { name, email } = action.payload;
      const newUser = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name,
        status: true,
        avatar: '',
        email,
      };
      state.users = [...state.users, newUser];
    },
    deleteUserById: (state, action: PayloadAction<User['id']>) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    changeStatus: (state, action: PayloadAction<User['id']>) => {
      const userId = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.status = !user.status;
      }
    },
  },
});

export const { createUser, deleteUserById, changeStatus } = userSlice.actions;
export default userSlice.reducer;
