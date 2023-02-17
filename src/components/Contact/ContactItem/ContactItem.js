import propTypes from 'prop-types';
import {ContactWrap, ContactInfo, DelBtn} from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <ContactWrap>
            <ContactInfo>
                {name}: {number}
            </ContactInfo>
                <DelBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
                >
                    Delete
                </DelBtn>
        </ContactWrap>
    )
}

ContactItem.propTypes = {
    id:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    number:propTypes.string.isRequired
}