import { Item, Button } from './ContactsItem.styled';
import { HiUserRemove } from "react-icons/hi";
import { deleteContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <Item>
      {contact.name}: {contact.number}
      <Button onClick={handleDelete}>
        <HiUserRemove size={15} />
      </Button>
    </Item>
  );
};
