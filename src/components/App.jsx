// import React, {useEffect} from "react";
// import { Container } from "./Container/Container";
// import { Section } from "./Section/Section";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import { ContactList } from "./Contact/ContactList/ContactList";
// import { useSelector, useDispatch } from "react-redux";
// import { selectContacts, selectIsLoading, selectError } from "redux/contacts/selectors";
// import { fetchContacts } from "redux/contacts/operations";
// import { LoaderSpinner } from "./Loader/loader";

// export const App = () => {
  
//   const contactsData = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//         dispatch(fetchContacts());
//     }, [dispatch]);
  
//   return (
//     <Container>
//         <Section title="Phonebook">
//             {isLoading && !error && <LoaderSpinner />}
//             <ContactForm/>
//         </Section>

//         {!!contactsData.length && (
//           <Section title="Contacts">
//             <Filter/>
//             <ContactList/>
//           </Section>
//         )}
        
//     </Container>
//   )
// }

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './Hooks/useAuth';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};






