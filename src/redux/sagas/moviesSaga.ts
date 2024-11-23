import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MOVIES, SET_MOVIES } from '../actions/actions';

interface Movie {
  title: string;
  episode_id: number;
  [key: string]: any; 
}

interface MovieWithRating extends Movie {
  rating: string;
}

const API_KEY = 'b9a5e69d';  
const OMDB_API_URL = 'https://www.omdbapi.com/';
const SWAPI_URL = 'https://swapi.dev/api/films/?format=json';


function* fetchMovieRatingFromOMDb(title: string): any {
  try {
    const { data } = yield call(axios.get, `${OMDB_API_URL}?t=${title}&apikey=${API_KEY}`);
    return data.imdbRating || 'N/A'; 
  } catch (error) {
    console.error('Error fetching movie rating:', error);
    return 'N/A'; 
  }
}


function* fetchMoviesFromSWAPI(): any {
  try {

    const { data } = yield call(axios.get, SWAPI_URL);
    const movies: Movie[] = data.results;


    const moviesWithRatings: MovieWithRating[] = yield all(
      movies.map(function* (movie: Movie): any {
        const rating: string = yield call(fetchMovieRatingFromOMDb, movie.title);
        return { ...movie, rating };  
      })
    );


    yield put({ type: SET_MOVIES, payload: moviesWithRatings });
  } catch (error) {
    console.error('Error fetching movies from SWAPI:', error);
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesFromSWAPI);
}

export default rootSaga;
