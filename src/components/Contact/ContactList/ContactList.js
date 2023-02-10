import { ContactItem } from "../ContactItem/ContactItem";
import {ContactListItem, ContactsList} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/selectors";

export const ContactList = () => {
    
const visibleContacts = useSelector(selectVisibleContacts);

    // const contactsData = useSelector(selectContacts);
    // const filterData = useSelector(selectFilter);    
    // const visibleContacts = () => {
    //     return contactsData.filter(contact =>
    //         contact?.name
    //         .toLowerCase()
    //         .includes(filterData)
    //     );
    // };
    
    return (
        <ContactsList>
            {visibleContacts.map( ({name, phone, id}) => (
                <ContactListItem key={id}>
                    <ContactItem 
                        name={name}
                        phone={phone}
                        id={id}
                    />
                </ContactListItem>
            ))}
        </ContactsList>
    );
}



