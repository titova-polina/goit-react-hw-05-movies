import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearch } from '../components/API';
import toast from 'react-hot-toast';
import { MoveList } from '../components/Movies/Movies';

const Movies = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const addQuiz = async search => {
    setSearchParams({ query: search.movies });
  };

  useEffect(() => {
    const searchData = async () => {
      try {
        const response = await fetchSearch(query);
        setData(response.results);
        toast.success('Good');
      } catch (error) {
        console.log(error);
        toast.error('Bad');
      }
    };
    searchData();
  }, [query]);

  return (
    <>
      <SearchForm onAdd={addQuiz} query={query} />
      {data && <MoveList data={data} />}
    </>
  );
};
export default Movies;
