import { styled } from 'styled-components';

export const List = styled.ul`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 0;
`;

export const ListItem = styled.li`
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #024278;
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ListItemImg = styled.img`
  width: 218px;
  height: 327px;
  border-radius: 4px 4px 0 0;
  object-fit: contain;
`;

export const Text = styled.p`
  font-weight: 600;
  max-height: 60px;
  padding: 0 8px;
  text-align: center;
`;
