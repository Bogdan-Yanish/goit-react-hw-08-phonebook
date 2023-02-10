import propTypes from 'prop-types';
import {ContactWrap, ContactInfo, DelBtn} from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    return (
        <ContactWrap>
            <ContactInfo>
                {name}: {phone}
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
    phone:propTypes.string.isRequired
}