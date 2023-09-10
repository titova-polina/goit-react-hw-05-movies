import { createGlobalStyle, styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

a{
  text-decoration: none;
}

h2,h3 {
    margin-top: 0;
    margin-bottom: 8px;
}

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  main {
    text-align: center;
  }

  b {
    font-size: 50px;
  }
`;

export const Section = styled.div`
  background-color: #ebdfcf52;
  width: 1200px;
  margin: auto;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-top: 10px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;

export const ListInfo = styled.li`
  text-decoration: underline;
  font-size: 15px;
  margin-left: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const Button = styled.div`
  max-width: 100px;
  border: 1px solid #5487c4;
  height: 26px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const Topic = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #0e0d24;
`;

export const Text = styled.p`
  max-width: 300px;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Header = styled.nav`
  max-width: 1000px;
  font-weight: bold;
`;

export const NavLinkData = styled(NavLink)`
  color: #5487c4;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #0b2b52;
  }

  &:hover {
    color: #024eab;
  }
`;
