import { all, fork } from 'redux-saga/effects';

import masterDataSaga from './masterData';


export default function* rootSaga() {
  yield all([

    fork(masterDataSaga),

  ]);
}