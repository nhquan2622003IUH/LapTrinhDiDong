import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Tập hợp các reducer
import rootSaga from './sagas'; // Tập hợp các saga

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy rootSaga để quản lý tất cả các Saga
sagaMiddleware.run(rootSaga);

export default store;
