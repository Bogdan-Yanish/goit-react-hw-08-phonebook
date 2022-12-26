// import { ContactItem } from "./ContactItem";

// export const ContactList = ({ contacts, handleDelete }) => {
//     return (
//         <ul>
//             {contacts.map(({ name, number, id }) => (
//                 <ContactItem 
//                 key={id}
//                 name={name}
//                 number={number}
//                 handleDelete={handleDelete} 
//                 />
//             ))}
//         </ul>
        
//     );
// }

export const ContactList = ({ contacts, handleDelete }) => {
    return (
        <div>
            <ul>
                {contacts.map((contact, id) => (
                <li key={id}>
                    {contact.name}: {contact.number}
                    <button
                    type="button"
                    onClick={() => handleDelete(contact.id)}
                >
                    Delete
                    </button>
                </li>
            ))}
            </ul>
        </div>
    );
}