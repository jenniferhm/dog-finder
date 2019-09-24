import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import DogList from './DogList';
import DogDetails from './DogDetails';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/dogs"
          render={() => <DogList dogData={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name"
          render={routeProps => <DogDetails {...routeProps} dogData={this.props.dogs} />}
        />
        <Redirect to="/dogs" />
      </Switch>
    )
  }
}

export default Routes;