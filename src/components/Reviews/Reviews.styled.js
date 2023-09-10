import { styled } from 'styled-components';

export const List = styled.ul`
  max-width: 1000px;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5487c4;
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Topic = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: auto;
  padding: 10px;
`;
