import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';
import { LinkIcon, MailIcon, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSetUser } from '../../hooks/users/useSetUser';

interface PropsModalAddUser {
  isOpenAddUser: boolean;
  onOpenChange: () => void;
  type: string;
}

const ModalAddUser = ({ isOpenAddUser, onOpenChange }: PropsModalAddUser) => {
  const [terms, setTerms] = useState(false);

  const { addNewUser } = useSetUser();

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('nombre') as string;
    const email = data.get('email') as string;

    addNewUser(email, name);

    form.reset();
    setTerms(false);
    onOpenChange();
  };

  return (
    <Modal
      isOpen={isOpenAddUser}
      placement='top-center'
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <form onSubmit={handleAddUser}>
              <ModalHeader className='flex flex-col gap-1'>
                Crear usuario
              </ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <User className='text-2xl text-default-400 pointer-events-none shrink-0' />
                  }
                  label='Nombre'
                  placeholder='Ingrese el nombre de usuario'
                  type='text'
                  variant='bordered'
                  name='nombre'
                  id='nombre'
                />

                <Input
                  endContent={
                    <MailIcon className='text-2xl text-default-400 pointer-events-none shrink-0' />
                  }
                  label='Email'
                  placeholder='Ingrese el correo del usuario'
                  variant='bordered'
                  name='email'
                  id='email'
                />

                <div className='flex py-2 px-1 items-center gap-2'>
                  <LinkIcon
                    className='text-primary'
                    size={15}
                  />
                  <Link
                    to='#'
                    target='_blank'
                    className='text-blue-400 underline'
                  >
                    Ver terminos y condiciones
                  </Link>
                </div>
                <div className='flex py-2 px-1 justify-between'>
                  <Checkbox
                    classNames={{
                      label: 'text-small',
                    }}
                    name='terms'
                    id='terms'
                    isSelected={terms}
                    onValueChange={setTerms}
                  >
                    Acepta terminos y condiciones
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='danger'
                  variant='flat'
                  onPress={onClose}
                  type='reset'
                >
                  Cerrar
                </Button>
                <Button
                  color='success'
                  variant='flat'
                  onPress={onClose}
                  type='submit'
                >
                  Crear usuario
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalAddUser;
