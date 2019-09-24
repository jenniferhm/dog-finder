import React from 'react';
import uuid from 'uuid/v4';

class DogDetails extends React.Component {
  render() {
    let dog = this.props.dogData;
    return (
      <div>
        <h3>{dog.name}</h3>
        <p>Age: {dog.age}</p>
        <ul>
          {dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}
        </ul>
        <img src={dog.src} alt={dog.name} />
      </div>
    )
  }
}

export default DogDetails;