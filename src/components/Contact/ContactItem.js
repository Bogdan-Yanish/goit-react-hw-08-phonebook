
export const ContactItem = ({ id, name, number, handleDelete}) => {
    return (
        <ul>
            <li>
                <span>
                {name}: {number}
                </span>
                <button 
                type="button"
                onClick={() => handleDelete(id)}>
                    Delete

                </button>

            </li>
        </ul>
    )
}
