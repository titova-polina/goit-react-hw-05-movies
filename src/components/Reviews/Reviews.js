import { Topic, Text, List, ListItem } from './Reviews.styled';
import { fetchReviews } from '../API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchReviews(id);
        setData(response.results);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <List>
        {data.length !== 0 ? (
          data.map(dat => (
            <ListItem key={dat.id}>
              <Topic>{dat.author}</Topic>
              <Text>{dat.content}</Text>
            </ListItem>
          ))
        ) : (
          <Text>We don't have any reviews for this movie.</Text>
        )}
      </List>
    </>
  );
};
export default Reviews;
