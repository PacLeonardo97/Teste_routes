import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from './routes';
import store from './ducks/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ path, component, index }) => (
            <Route key={index} path={path} component={component} exact />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
