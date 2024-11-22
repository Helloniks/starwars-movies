
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_MOVIES, SELECT_MOVIE, FILTER_MOVIES } from '../redux/actions/actions';
import MovieDetail from './MovieDetail';
import MovieFilter from './MovieFilter';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies);
  const selectedMovie = useSelector((state: any) => state.selectedMovie);
  
  useEffect(() => {
    dispatch({ type: FETCH_MOVIES });
  }, [dispatch]);

  const handleMovieSelect = (movie: any) => {
    dispatch({ type: SELECT_MOVIE, payload: movie });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <MovieFilter />
        <ul>
          {movies.map((movie: any) => (
            <li key={movie.episode_id} onClick={() => handleMovieSelect(movie)}>
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        {selectedMovie ? <MovieDetail movie={selectedMovie} /> : <p>Select a movie to see the details</p>}
      </div>
    </div>
  );
};

export default MovieList;