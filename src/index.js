/* healthy-poo application
   An application designed to determine the healthyness of your poo, 
   and steps taken to have healthier poo. */
import React from 'react';
import ReactDOM from 'react-dom';

// react router dependencies
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// sync redux with react-router-dom
// import { Provider } from 'react-redux';

// components
import App from './components/App';
import Main from './components/Main';

//import CSS
import css from './styles/main.css';

import registerServiceWorker from './registerServiceWorker';

const reactRouter = (
  <BrowserRouter>
    <Route exact path="/" component={Main} />
  </BrowserRouter>
)

ReactDOM.render(
  reactRouter, 
  document.getElementById('root')
);

registerServiceWorker();
