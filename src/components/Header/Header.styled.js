import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #d2e6f7;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;

export const NavigationLink = styled(NavLink)`
  color: #5487c4;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #0b2b52;
  }
  &:hover {
    color: #024eab;
  }
`;
