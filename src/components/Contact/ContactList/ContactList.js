import { ContactItem } from "../ContactItem/ContactItem";
import {ContactListItem, ContactsList} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
    const contactsData = useSelector(getContacts);
    const filterData = useSelector(getFilter);

    const filteredContacts = () => {
        return contactsData.filter(contact =>
            contact.name
            .toLowerCase()
            .includes(filterData)
          );
        };

    return (
        <ContactsList>
            {filteredContacts()?.map( ({name, number, id}) => (
                <ContactListItem key={id}>
                    <ContactItem 
                        name={name}
                        number={number}
                        id={id}
                    />
                </ContactListItem>
            ))}
        </ContactsList>
    );
}


