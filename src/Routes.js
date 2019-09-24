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
          render={routeProps => {
            let allDogs= this.props.dogs;
            let oneDog = allDogs.filter(d => d.name === routeProps.match.params.name);
            return <DogDetails {...routeProps} dogData={oneDog[0]} />}
          }
    />
        <Redirect to="/dogs" />
      </Switch>
    )
  }
}

export default Routes;