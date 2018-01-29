/* 
  healthy-poo.  
  An application designed to determine 
  the healthyness of your poo, and steps 
  taken to have healthier poo. 
*/
  
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// components
import App from './containers/App';

//import CSS
import './styles/main.css';

const reactRouter = (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
)

ReactDOM.render(
  reactRouter, 
  document.getElementById('root')
);

registerServiceWorker();
