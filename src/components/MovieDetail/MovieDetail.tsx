import React from 'react';
import styles from './MovieDetail.module.scss';

interface MovieDetailProps {
  movie: {
    title: string;
    episode_id: number;
    release_date: string;
    opening_crawl: string;
  };
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => (
  <div className={styles.movieDetailContainer}>
      <h2 className={styles.movieDetailHeading}>{movie.title}</h2>
      <p className={styles.movieDetailDescription}>{movie.opening_crawl}</p>
      <div className={styles.movieDetailMeta}>
        <span>Episode ID: {movie.episode_id}</span>
        <span>Release Date: {movie.release_date}</span>
      </div>
      <img
        src={`https://starwars-visualguide.com/assets/img/films/${movie.episode_id}.jpg`}
        alt={movie.title}
        className={styles.movieDetailImage}
      />
    </div>
);

export default MovieDetail;