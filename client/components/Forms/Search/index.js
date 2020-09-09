import { useState } from 'react';
import { StyledSearchForm, StyledInput } from './styled';
import Router from 'next/router';

const Search = () => {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    Router.push(`search/?q=${value}`);
  };

  return (
    <StyledSearchForm onSubmit={onSubmit}>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search for an item"
      />
      {value.length > 0 && <button type="submit">Submit</button>}
    </StyledSearchForm>
  );
};

export default Search;
