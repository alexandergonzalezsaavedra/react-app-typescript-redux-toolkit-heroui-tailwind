import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import {
  changeStatus,
  createUser,
  //createUser,
  deleteUserById,
  type User,
} from '../../store/slices/users/usersSlice';
import { addToast } from '@heroui/react';
import { CircleX } from 'lucide-react';

export const useSetUser = () => {
  const dispatch = useDispatch();

  // Crear usuario
  const addNewUser = (name: string, email: string) => {
    dispatch(createUser({ name, email }));
  };

  // Eliminar usuario
  const users = useAppSelector((state) => state.users.users);
  const columns = useAppSelector((state) => state.users.columns);
  const deleteUserId = (id: User['id']) => {
    dispatch(deleteUserById(id));
    addToast({
      timeout: 6000,
      hideIcon: true,
      title: 'Advertencia',
      description: 'Se elimino el usuario correctamente',
      variant: 'flat',
      color: 'danger',
      severity: 'danger',
      classNames: {
        closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
      },
      radius: 'lg',
      closeIcon: <CircleX />,
    });
  };

  // cambiar estado
  const changeStatusUserById = (id: string) => {
    dispatch(changeStatus(id));
  };

  return { addNewUser, users, columns, deleteUserId, changeStatusUserById };
};
