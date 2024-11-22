import React from 'react';

interface MovieDetailProps {
  movie: {
    title: string;
    episode_id: number;
    release_date: string;
    opening_crawl: string;
  };
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => (
  <div>
    <h1>{movie.title}</h1>
    <p>Episode: {movie.episode_id}</p>
    <p>Release Date: {movie.release_date}</p>
    <p>{movie.opening_crawl}</p>
  </div>
);

export default MovieDetail;