import { FETCH_MOVIES, SET_MOVIES, SELECT_MOVIE, FILTER_MOVIES, SORT_MOVIES } from '../actions/actions';

interface Movie {
  title: string;
  episode_id: number;
  release_date: string;
  opening_crawl: string;
}

interface State {
  movies: Movie[];
  selectedMovie: Movie | null;
  filter: string;
}

const initialState: State = {
  movies: [],
  selectedMovie: null,
  filter: '',
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    case FILTER_MOVIES:
      return { ...state, filter: action.payload };
    case SORT_MOVIES:
      const sortedMovies = state.movies.slice().sort((a: Movie, b: Movie) => a.episode_id - b.episode_id);
      return { ...state, movies: sortedMovies };
    default:
      return state;
  }
};

export default moviesReducer;