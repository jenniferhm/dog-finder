import React from 'react';

class DogDetails extends React.Component {
  render() {
    let allDogs = this.props.dogData;
    let oneDog = allDogs.filter(d => d.name === this.props.match.params.name);
    return (
      <div>
        <h3>{oneDog[0].name}</h3>
        <p>Age: {oneDog[0].age}</p>
        <ul>
          {oneDog[0].facts.map(fact => <li key={Math.random()}>{fact}</li>)}
        </ul>
        <img src={oneDog[0].src} alt={oneDog[0].name} />
      </div>
    )
  }
}

export default DogDetails;