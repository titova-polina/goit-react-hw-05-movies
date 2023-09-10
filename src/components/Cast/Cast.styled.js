import { styled } from 'styled-components';

export const List = styled.ul`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ListItem = styled.li`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5487c4;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Text = styled.p`
  font-size: 15px;
  text-size-adjust: auto;
  height: 50px;
  margin: auto;
  padding: 14px;
  text-align: center;
  font-weight: bold;
`;

export const ListImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;
