import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App.jsx';
import About from './modules/Content.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/About" component={About} />
  </Router>
), document.getElementById('app'));
