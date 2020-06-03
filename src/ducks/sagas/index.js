import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    // vai ficar todos os reducers
  ]);
}

export { rootSaga as default, rootSaga };
