import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filtersSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    return (
    <div>
        <FilterLabel>Find contacts by Name </FilterLabel>
    <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
    />
  </div>
);
}

