import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <h1>Star Wars Movies</h1>
      <MovieList />
    </div>
  </Provider>
);

export default App;
