import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledSearchForm, SearchField, Error, Btn } from './SearchForm.styled';
const validation = Yup.object().shape({
  movies: Yup.string().min(2).max(50).required('*Movie title required'),
});

export const SearchForm = ({ onAdd, query }) => {
  return (
    <>
      <Formik
        initialValues={{
          movies: query || '',
        }}
        validation={validation}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledSearchForm>
          <label>
            <SearchField type="text" name="movies" placeholder="Movie title" />
            <Error name="movies" component="div" />
          </label>
          <Btn type="submit">Search</Btn>
        </StyledSearchForm>
      </Formik>
    </>
  );
};
