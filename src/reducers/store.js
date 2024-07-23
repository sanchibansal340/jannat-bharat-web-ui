import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appReducer from './appReducer';
import rootSaga from '../sagas/rootSaga';


const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_STORE_STATE') {
      state = undefined;
    }
    return appReducer(state, action);
  };

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;