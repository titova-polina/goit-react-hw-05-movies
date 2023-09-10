import { useEffect, useState, Suspense } from 'react';
import { fetchDetails } from '../components/API';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import imgDat from '../components/Img/no.image.png';
import {
  GlobalStyle,
  Wrapper,
  Button,
  Container,
  Text,
  NavLinkData,
  ListItem,
  List,
} from 'components/GlobalStyle';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDetails(id);
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const backLink = location?.state?.from ?? '/goit-react-hw-05-movies';

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Link to={backLink}>
        <Button>
          <AiOutlineArrowLeft />
          Go back
        </Button>
      </Link>
      <Container>
        <img
          src={
            data.poster_path !== null
              ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
              : imgDat
          }
          alt={data.title}
          width="180px"
          height="280px"
          style={{ objectFit: 'cover' }}
        />
        <Wrapper>
          <h2>{data.title}</h2>
          <Text>User Score: {data.vote_average.toFixed(1) * 10}%</Text>
          <h3>Overview</h3>
          <Text>{data.overview}</Text>
          <h3>Genres</h3>
          <Text>{data.genres.map(genr => genr.name).join(' ')}</Text>
        </Wrapper>
      </Container>
      <List>
        <ListItem>
          <NavLinkData to="cast">Cast</NavLinkData>
        </ListItem>
        <ListItem>
          <NavLinkData to="reviews">Reviews</NavLinkData>
        </ListItem>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </>
  );
};
export default MovieDetails;
