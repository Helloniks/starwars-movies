import React from 'react';
import styles from './MovieSort.module.scss';

interface MovieSortProps {
    sortCriterion: string;
    onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MovieSort: React.FC<MovieSortProps> = ({ sortCriterion, onSortChange }) => {
    return (
        <div className={styles.movieSortContainer}>
            <label htmlFor="sort" className={styles.movieSortLabel}>Sort by: </label>
            <select id="sort" value={sortCriterion} onChange={onSortChange} className={styles.movieSortSelect}>
                <option value="episode_id">Episode ID</option>
                <option value="title">Title</option>
            </select>
        </div>
    );
};

export default MovieSort;