import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsList } from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  return (
    <div>
      <title>Your Contacts</title>
      <FormBook />
      <FilterContacts />
      {isLoading || <ContactsList />}
      
    </div>
    
  );
  
}
