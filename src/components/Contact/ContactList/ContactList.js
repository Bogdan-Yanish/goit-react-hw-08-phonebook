import propTypes from 'prop-types';
import { ContactItem } from "../ContactItem/ContactItem";
import {ContactListItem, ContactsList} from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
    return (
        <ContactsList>
            {contacts.map( contactData => (
                <ContactListItem key={contactData.id}>
                    <ContactItem 
                        contactData={contactData}
                        handleDelete={handleDelete} 
                    />
                </ContactListItem>
            ))}
        </ContactsList>
    );
}

ContactList.propTypes = {
    contacts:propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.string.isRequired,
            name:propTypes.string.isRequired,
            number:propTypes.string.isRequired,
        })

    ),
    handleDelete:propTypes.func.isRequired,
}

// export const ContactList = ({ contacts, handleDelete }) => {
//     return (
//         <div>
//             <ul>
//                 {contacts.map((contact, id) => (
//                 <li key={id}>
//                     {contact.name}: {contact.number}
//                     <button
//                     type="button"
//                     onClick={() => handleDelete(contact.id)}
//                 >
//                     Delete
//                     </button>
//                 </li>
//             ))}
//             </ul>
//         </div>
//     );
// }