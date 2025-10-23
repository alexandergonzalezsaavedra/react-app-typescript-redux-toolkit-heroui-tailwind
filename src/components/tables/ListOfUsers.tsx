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
} from '@heroui/react';
import { DeleteIcon, EditIcon, EyeIcon } from 'lucide-react';

interface UserInterface {
  id: string;
  name: string;
  status: boolean;
  avatar: string;
  email: string;
}

const users: UserInterface[] = [
  {
    id: '1',
    name: 'Tony Reichert',
    status: true,
    avatar: ``,
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

interface ColumnasInterface {
  name: string;
  uid: string;
}

const columnas: ColumnasInterface[] = [
  { name: 'USUARIO', uid: 'user' },
  { name: 'ESTADO', uid: 'status' },
  { name: 'ACCIONES', uid: 'actions' },
];

const ListOfUser = () => {
  return (
    <Table aria-label='Tabla CRUD'>
      <TableHeader columns={columnas}>
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
                  src: `https://unavatar.io/github/${item.id}`,
                }}
                description={item.email}
                name={item.name}
              >
                {item.email}
              </User>
            </TableCell>
            <TableCell>
              <Chip
                className='capitalize'
                color={item.status ? 'success' : 'danger'}
                size='sm'
                variant='flat'
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
                  <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default ListOfUser;
