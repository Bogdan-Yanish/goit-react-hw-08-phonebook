import React, {useEffect} from "react";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./Contact/ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectIsLoading, selectError } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { LoaderSpinner } from "./Loader/loader";

export const App = () => {
  
  const contactsData = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
  
  return (
    <Container>
        <Section title="Phonebook">
            {isLoading && !error && <LoaderSpinner />}
            <ContactForm/>
        </Section>

        {!!contactsData.length && (
          <Section title="Contacts">
            <Filter/>
            <ContactList/>
          </Section>
        )}
        
    </Container>
  )
}






