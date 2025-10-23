import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { deleteUser, type User } from '../../store/slices/users/usersSlice';

export const useSetUser = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users.users);
  const columns = useAppSelector((state) => state.users.columns);

  const deleteUserSelected = (id: User['id']) => {
    dispatch(deleteUser(id));
  };

  return { users, columns, deleteUserSelected };
};
