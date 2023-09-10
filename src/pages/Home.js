import React, { useEffect, useState } from 'react';
import { fetchTrending } from '../components/API';
import { MoveList } from '../components/Movies/Movies';
import { Topic } from '../components/GlobalStyle';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrending();
        setData(response.results);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Topic>Trending today</Topic>
      {data && <MoveList data={data} />}
    </>
  );
};
export default Home;
