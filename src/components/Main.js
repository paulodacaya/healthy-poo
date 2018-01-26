import React, { Component, Fragment } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

//import components
import ShapGrid from './ShapeGrid';

export default class Main extends Component {

  renderTitle = () => {
    <div>
      <h1>
        <Link to="/">What does my Poo mean?</Link>
      </h1>
    </div>
  }


  render() {
    return (
      <Fragment>
        {this.renderTitle}
      
        <Switch>
          <Route path="/" component={ShapGrid} />
        </Switch>
      </Fragment>
    );
  }
}