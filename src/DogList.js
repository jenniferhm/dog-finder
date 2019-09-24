import React from 'react';
import { Link } from 'react-router-dom'
// import DogDetails from './DogDetails';


class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: this.props.dogData
    }
  }
  render() {
    let dogs = this.state.dogs.map(dog => (
      <div key={dog.name}>
        <h3 ><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>
      </div>
    ))
    return (
      <div>
        {dogs}
      </div>
    )
  }
}

export default DogList;