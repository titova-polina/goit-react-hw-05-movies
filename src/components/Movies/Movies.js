import { useLocation, Link } from 'react-router-dom';
import noImg from '../Img/no.image.png';
import { List, ListItem, ListItemImg, Text } from './Movies.styled';

export const MoveList = ({ data }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {data.map(dat => (
          <ListItem key={dat.id}>
            <Link
              to={`/goit-react-hw-05-movies/movies/${dat.id}`}
              state={{ from: location }}
            >
              <ListItemImg
                src={
                  dat.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w300/${dat.poster_path}`
                    : noImg
                }
                alt={dat.title}
                width="218"
                height="327px"
                style={{ objectFit: 'contain ' }}
              />
            </Link>
            <Text>{dat.title}</Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};
