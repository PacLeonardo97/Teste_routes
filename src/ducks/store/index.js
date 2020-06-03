import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = () => {
  if (process.env.NODE_ENV === 'development')
    return composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
  return applyMiddleware(sagaMiddleware);
};

const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  middleware()
);

sagaMiddleware.run(rootSaga);

export default store;
