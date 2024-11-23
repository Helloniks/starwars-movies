import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_MOVIES, SELECT_MOVIE } from '../redux/actions/actions';
import MovieDetail from './MovieDetail';
import MovieFilter from './MovieFilter';

import styles from './MovieList.module.scss';

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
    <div className={styles.movieListContainer}>
      <div className={styles.movieListLeft}>
        <div className={styles.movieCardsContainer}>
          {movies.map((movie: any) => (
            <div
              key={movie.episode_id}
              className={styles.movieCard}
              onClick={() => handleMovieSelect(movie)}
            >
              <div className={styles.movieHeader}>
                <span className={styles.episodeNumber}>Episode {movie.episode_id}</span>
                <span className={styles.movieTitle}>{movie.title}</span>
                <p className={styles.movieRating}>Rating: {movie.rating}</p>
                <span className={styles.releaseDate}>{movie.release_date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.movieListRight}>
        {selectedMovie ? <MovieDetail movie={selectedMovie} /> : <p>Select a movie to see the details</p>}
      </div>
    </div>
  );
};

export default MovieList;
