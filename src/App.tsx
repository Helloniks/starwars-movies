import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList/MovieList';
import styles from './App.module.scss'; // Import the SCSS module
import MovieFilter from './components/MovieFilter/MovieFilter';

const App: React.FC = () => (
  <Provider store={store}>
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <div>Star Wars Movies</div>
      </header>
      <MovieFilter />
      <MovieList />
      <footer className={styles.appFooter}>
        <p>Powered by Redux & React</p>
      </footer>
    </div>
  </Provider>
);

export default App;
