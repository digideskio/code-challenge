import React from 'react';
import { render as renderDOM } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

//Component dependencies
import Container from './components/Container';
import TweetList from './components/TweetList';

// Combined Reducers
import app from './reducers/reducers';

//Creating redux store from combined reducers
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

const store = createStoreWithMiddleware(app);

// Render application along with routing
renderDOM((

  <Provider store={ store }>
    <Router>
      <Route path='/' component={ Container }>
        <IndexRoute component={ TweetList } />
        <Route path='*' component={ TweetList } />
      </Route>
    </Router>
  </Provider>

), document.getElementById('react-entry'));
