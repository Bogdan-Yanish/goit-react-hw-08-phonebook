import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/Contact/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectContacts, selectError } from 'redux/contacts/selectors';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { LoaderSpinner } from 'components/Loader/loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>My Contacts</title>
      <Container>
        <Section title="Phonebook">
          {isLoading && !error && <LoaderSpinner />}
          <ContactForm/>
          
        </Section>

        {!!contacts.length && (
          <Section title="My Contacts">
            <Filter/>
            {/* <TaskEditor /> */}
            <ContactList />
          </Section>
        )}
      </Container>
    </>
  );
};

export default Contacts;