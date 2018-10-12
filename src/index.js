import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/index.css';
import AuthorQuiz from './js/AuthorQuiz';
import AuthorWrapper from './js/AuthorWrapper';
import * as serviceWorker from './js/serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={AuthorQuiz} />
      <Route path="/add" component={AuthorWrapper} />
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
