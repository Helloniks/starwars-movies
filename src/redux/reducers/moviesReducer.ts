import { SET_MOVIES, SELECT_MOVIE, FILTER_MOVIES, SORT_MOVIES } from '../actions/actions';

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
      const filteredMovies = state.movies.filter((movie: Movie) => {
        const filterText = action.payload.toLowerCase();
        return (
          movie.title.toLowerCase().includes(filterText) ||
          movie.episode_id.toString().includes(filterText)
        );
      });
      return { ...state, movies: filteredMovies };
    case SORT_MOVIES:
        const sortedMovies = state.movies.slice().sort((a: Movie, b: Movie) => {
          if (action.payload === 'title') {
            return a.title.localeCompare(b.title); 
          }
          return a.episode_id - b.episode_id; 
        });
        return { ...state, movies: sortedMovies };
    default:
      return state;
  }
};

export default moviesReducer;