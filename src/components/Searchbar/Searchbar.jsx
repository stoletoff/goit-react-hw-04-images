import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBtn, FormWrapper, Header, FormInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Вы ничего не ввели, пожалуйста повторите попытку');
      return;
    }
    onSubmit(searchQuery.trim().toLowerCase());
    setSearchQuery('');
  };

  return (
    <Header>
      <FormWrapper onSubmit={handleSubmit}>
      <SearchBtn type="submit">
          <BsSearch />
        </SearchBtn>
        <FormInput
          name="searchValue"
          value={searchQuery}
          onChange={handleQueryChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        
      </FormWrapper>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
