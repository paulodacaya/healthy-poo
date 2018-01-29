import React, { Component } from 'react';

//components
import Card from './Card';

//data
import stoolColors from '../data/stoolColors';


export default class ShadeGrid extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <h2><strong>Question:</strong> What is the shade/color of my poo?</h2>
        <div className="grid-container">
          
        {stoolColors.map( (stoolColor, index) => 
          <Card 
            key={index}
            cardImage={stoolColor.image}
            cardAltAttibute={stoolColor.imageAlt}
            cardTitle={stoolColor.color}
            cardText={stoolColor.description} />
        )}

        </div>
      </div>
    )
  }
}