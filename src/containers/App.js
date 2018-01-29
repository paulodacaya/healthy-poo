import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

//import components
import Title from '../components/Title';
import ShapeGrid from '../components/ShapeGrid'
import ColorGrid from '../components/ColorGrid'

export default class Main extends Component {

  render() {

    return (
      <Fragment>
        <Title />       
          <Route exact path="/" render={ () => <Redirect to="/shapes"/> }/>

          <Route exact path="/shapes" render={ () => 
            <ShapeGrid />
          }/>
          <Route exact path="/shapes/colors" render={ () => 
            <ColorGrid />
          }/>
      </Fragment>
    );
  }
}