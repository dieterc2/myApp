import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './Modules/App.jsx';
import About from './Modules/Content.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/About" component={About} />
  </Router>
), document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('app'));

/**ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {App} />
      <Route path = "Content" component = {Content} />
    </Route>
  </Router>
), document.getElementById('app'));*/
