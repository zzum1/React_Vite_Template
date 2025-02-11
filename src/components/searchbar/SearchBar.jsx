import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [cityInput, setCityInput] = useState('');

  const handleChange = (event) => {
    setCityInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(cityInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={cityInput} onChange={handleChange} placeholder="Įveskite miestą" />
      <button type="submit">Ieškoti</button>
    </form>
  );
};

export default SearchBar;