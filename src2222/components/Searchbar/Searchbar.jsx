import { useState } from 'react';
import { Header, FormWrapper, SearchBtn, FormInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
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
          name="searchQuery"
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
