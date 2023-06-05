import { Formik } from 'formik';
import { Header, FormWrapper, SearchBtn, FormInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    if (values.searchQuery.trim() === '') {
      toast.error('Вы ничего не ввели, пожалуйста повторите попытку');
    }
    onSubmit(values.searchQuery.toLowerCase());
    actions.resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        <FormWrapper>
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>

          <FormInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormWrapper>
      </Formik>
    </Header>
  );
};
