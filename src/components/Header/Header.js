import { List, ListItem, NavigationLink } from './Header.styled';

export const Header = () => {
  return (
    <List>
      <ListItem>
        <NavigationLink to="" end>
          Home
        </NavigationLink>
      </ListItem>
      <ListItem>
        <NavigationLink to="movies">Movies</NavigationLink>
      </ListItem>
    </List>
  );
};
