import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from './actions';
import {
  DELETE_ITEM_REQUEST,
  deleteItemSuccess,
  deleteItemFailure,
} from './actions';

function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://66fc8f65c3a184a84d174ff9.mockapi.io/todo'
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}


function* deleteItemSaga(action) {
  try {
    const id = action.payload;
    yield call(
      axios.delete,
      `https://66fc8f65c3a184a84d174ff9.mockapi.io/todo/${id}`
    );
    yield put(deleteItemSuccess(id));
  } catch (error) {
    yield put(deleteItemFailure(error.message));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(FETCH_DATA_REQUEST, fetchDataSaga),
    takeLatest(DELETE_ITEM_REQUEST, deleteItemSaga),
  ]);
}


export default rootSaga;
