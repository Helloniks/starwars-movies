import React from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_MOVIES } from '../redux/actions/actions';

const MovieFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FILTER_MOVIES, payload: e.target.value });
  };

  return (
    <input type="text" placeholder="Filter by movie name..." onChange={handleFilterChange} />
  );
};

export default MovieFilter;