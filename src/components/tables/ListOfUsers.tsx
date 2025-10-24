import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Button,
  useDisclosure,
} from '@heroui/react';
import { DeleteIcon, EditIcon, EyeIcon } from 'lucide-react';

import { useSetUser } from '../../hooks/users/useSetUser';
import ModalAddUser from '../modals/ModalAddUser';
import { useState } from 'react';

const ListOfUser = () => {
  const { users, columns, deleteUserId, changeStatusUserById } = useSetUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [typeAction, setTypeAction] = useState('');

  const typeInformation = (type: string) => {
    setTypeAction(type);
  };

  const getIdSuffix = (id: string) => {
    return id.split('-')[0].slice(-2);
  };

  return (
    <>
      <div className='flex justify-center my-8'>
        <Button
          className='bg-linear-to-tr from-blue-500 to-indigo-800 text-white shadow-lg'
          radius='full'
          onPress={() => {
            typeInformation('create');
            onOpen();
          }}
        >
          Crear usuario
        </Button>
      </div>
      <ModalAddUser
        isOpenAddUser={isOpen}
        onOpenChange={onOpenChange}
        type={typeAction}
      />

      <Table aria-label='Tabla CRUD'>
        <TableHeader columns={columns}>
          {(columa) => (
            <TableColumn
              key={columa.uid}
              align={columa.uid === 'actions' ? 'center' : 'start'}
            >
              {columa.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>
                <User
                  avatarProps={{
                    radius: 'lg',
                    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${getIdSuffix(
                      item.id
                    )}.png`,
                  }}
                  description={item.email}
                  name={item.name}
                >
                  {item.email}
                </User>
              </TableCell>
              <TableCell>
                <Chip
                  className='capitalize cursor-pointer'
                  color={item.status ? 'success' : 'danger'}
                  size='sm'
                  variant='flat'
                  onClick={() => changeStatusUserById(item.id)}
                >
                  {item.status ? 'ACTIVO' : 'INACTIVO'}
                </Chip>
              </TableCell>
              <TableCell>
                <div className='relative flex items-center gap-2 justify-end'>
                  <Tooltip content='Detalles del usuario'>
                    <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                      <EyeIcon />
                    </span>
                  </Tooltip>
                  <Tooltip content='Editar usuario'>
                    <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                      <EditIcon />
                    </span>
                  </Tooltip>
                  <Tooltip
                    color='danger'
                    content='Eliminar usuario'
                  >
                    <span
                      className='text-lg text-danger cursor-pointer active:opacity-50'
                      onClick={() => deleteUserId(item.id)}
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
export default ListOfUser;
