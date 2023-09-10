import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledSearchForm = styled(Form)`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  align-items: baseline;
  border-radius: 6px;
`;

export const SearchField = styled(Field)`
  max-width: 500px;
  padding: 6px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;

export const Btn = styled.button`
  border: 1px solid #5487c4;
  background-color: #5487c4;
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #024eab;
  }
`;
