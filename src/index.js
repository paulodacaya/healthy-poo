/* 
  healthy-poo.  
  An application indicating your health
  through the visuals of your stool.
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
  <BrowserRouter basename="/healthy-poo">
    <Route path="/" component={App} />
  </BrowserRouter>
)

ReactDOM.render(
  reactRouter, 
  document.getElementById('root')
);

registerServiceWorker();
