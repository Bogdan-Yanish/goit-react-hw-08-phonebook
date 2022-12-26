import propTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => {
    return (
    <div>
        <FilterLabel>Find contacts by Name </FilterLabel>
    <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
    />
  </div>
);
}

Filter.propTypes = {
    filter:propTypes.string.isRequired,
    handleChange:propTypes.func.isRequired,
}