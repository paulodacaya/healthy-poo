import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

//import components
import Title from '../components/Title';
import Notfound from '../components/Notfound';
import ShapeGrid from '../components/ShapeGrid';
import ColorGrid from '../components/ColorGrid';
import Result from '../components/Result';

export default class Main extends Component {

  render() {

    return (
      <Fragment>
        <Title />       
        <Switch>
          <Route exact path="/" component={ShapeGrid} />
          <Route exact path="/:shapeCode" component={ColorGrid} />
          <Route exact path="/:shapeCode/:colorCode" component={Result} />
          <Route component={Notfound} />
        </Switch>
      </Fragment>
    );
  }
}