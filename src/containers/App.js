import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

//import components
import Title from '../components/Title';
import ShapeGrid from '../components/ShapeGrid';
import ColorGrid from '../components/ColorGrid';
import Result from '../components/Result';

export default class Main extends Component {

  render() {

    return (
      <Fragment>
        <Title />       
        <Route exact path="/" component={ShapeGrid} />
        <Route exact path="/:shapeCode" component={ColorGrid} />
        <Route exact path="/:shapeCode/:colorCode" component={Result} />
      </Fragment>
    );
  }
}