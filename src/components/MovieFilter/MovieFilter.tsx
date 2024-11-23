import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_MOVIES, FETCH_MOVIES, SORT_MOVIES } from '../../redux/actions/actions';
import styles from './MovieFilter.module.scss';

const MovieFilter: React.FC = () => {
    const dispatch = useDispatch();
    const [sortCriterion, setSortCriterion] = useState<string>('title');
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        dispatch({ type: SORT_MOVIES, payload: sortCriterion });
      }, [dispatch, sortCriterion]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortCriterion(event.target.value);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = e.target.value;
        setFilterText(filterValue);
        if (filterValue === '') {
            dispatch({ type: FETCH_MOVIES });
        } else {
            dispatch({ type: FILTER_MOVIES, payload: filterValue });
        }
    };

    return (
        <div className={styles.movieFilterContainer}>
            <div className={styles.sortAndFilterContainer}>
                <select
                    value={sortCriterion}
                    onChange={handleSortChange}
                    className={styles.sortSelect}
                >
                    <option value="episode_id">Sort by Episode</option>
                    <option value="title">Sort by Title</option>
                    <option value="release_date">Sort by Release Date</option>
                </select>
                <input
                    type="text"
                    placeholder="Filter by movie name..."
                    value={filterText}
                    onChange={handleFilterChange}
                    className={styles.movieFilterInput}
                />
            </div>
        </div>
    );
};

export default MovieFilter;