import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from './App';
import {AboutMe} from './components/AboutMe'
import {Baselayout} from './components/Baselayout'
import {Projects} from './components/Projects'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <Baselayout>
  <Switch>
    <Route path="/AboutMe" component={AboutMe} />
    <Route path = "/Projects" component={Projects} />
    <Route exact path="/" component={App} />
  </Switch>

  </Baselayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
