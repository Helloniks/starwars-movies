import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MOVIES, SET_MOVIES } from '../actions/actions';

function* fetchMovies():any {
  try {
    const response = yield call(axios.get, 'https://swapi.dev/api/films/?format=json');
    yield put({ type: SET_MOVIES, payload: response.data.results });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

export default rootSaga;