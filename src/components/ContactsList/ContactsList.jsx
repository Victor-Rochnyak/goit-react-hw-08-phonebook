import React from 'react';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
// Стилі
import { List } from './ContactsList.styled';
// import { selectFilterContacts } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFindContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const getFindContact = getFindContacts();

  return (
    <List>
      {getFindContact.map(contact => (
        <ContactsItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};

export default ContactsList;
