import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/mainView';
import UserView from './views/userView';

const store = configureStore();

export default () => (
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/:route" component={UserView} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )