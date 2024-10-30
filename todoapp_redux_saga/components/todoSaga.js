import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const API_URL = 'https://66fc8f65c3a184a84d174ff9.mockapi.io/todo';

function* getData() {
  try {
    const res = yield call(axios.get, API_URL);
    yield put({ type: 'GET_DATA_SUCCESS', payload: res.data });
  } catch (e) {
    yield put({ type: 'GET_DATA_FAILURE', payload: e.message });
  }
}

function* createTodo(action) {
  try {
    const res = yield call(axios.post, API_URL, action.payload);
    yield put({ type: 'CREATE_DATA_SUCCESS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
}

function* deleteTodo(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: 'DELETE_DATA_SUCCESS', payload: action.payload });
  } catch (error) {
    console.error(error);
  }
}

function* updateTodo(action) {
  try {
    const res = yield call(
      axios.put,
      `${API_URL}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: 'UPDATE_DATA_SUCCESS', payload: res.data });
  } catch (error) {
    console.error(error);
  }
}

export function* watchTodos() {
  yield takeLatest('GET_DATA_REQUEST', getData);
  yield takeLatest('CREATE_DATA_REQUEST', createTodo);
  yield takeLatest('DELETE_DATA_REQUEST', deleteTodo);
  yield takeLatest('UPDATE_DATA_REQUEST', updateTodo);
}
