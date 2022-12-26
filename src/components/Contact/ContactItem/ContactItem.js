import propTypes from 'prop-types';
import {ContactWrap, ContactInfo, DelBtn} from './ContactItem.styled';

export const ContactItem = ({ contactData: {id, name, number}, handleDelete}) => {
    return (
        <ContactWrap>
            <ContactInfo>
                {name}: {number}
            </ContactInfo>
                <DelBtn
                type="button"
                onClick={() => handleDelete(id)}
                >
                    Delete
                </DelBtn>
        </ContactWrap>
    )
}

ContactItem.propTypes = {
    contactData:propTypes.shape({
        id:propTypes.string.isRequired,
        name:propTypes.string.isRequired,
        number:propTypes.string.isRequired
    }),
    handleDelete:propTypes.func.isRequired,
}

