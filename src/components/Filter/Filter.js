

export const Filter = ({ filter, handleChange }) => {
    return (
    <div>
        <label>Find contacts by Name </label>
    <input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
    />
  </div>
);
}