import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history } from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import Article from './components/Article';
import Editor from './components/Editor';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Register from './components/Register';
import Settings from './components/Settings';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/editor/:slug" component={Editor} />
        <Route path="/editor" component={Editor} />
        <Route path="/article/:id" component={Article} />
        <Route path="/settings" component={Settings} />
        <Route path="/@:username/favorites" component={ProfileFavorites} />
        <Route path="/@:username" component={Profile} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
