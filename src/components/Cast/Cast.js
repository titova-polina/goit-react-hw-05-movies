import { fetchCredits } from '../API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../Img/no.image.png';
import { List, ListImg, ListItem, Text } from './Cast.styled';

const Cast = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCredits(id);
        setData(response.cast);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <List>
        {data.map(dat => (
          <ListItem key={dat.id}>
            <ListImg
              src={
                dat.profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${dat.profile_path}`
                  : img
              }
              alt={dat.name}
              width="200px"
              height="300px"
              style={{ objectFit: 'contain ' }}
            />
            <Text>{dat.name}</Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default Cast;
