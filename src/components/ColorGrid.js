import React from 'react';
import { Link } from 'react-router-dom';

//components
import Card from './Card';

//data
import stoolColors from '../data/stoolColors';

const ColorGrid = ({ match }) => (
  
  <div className="wrapper">
    <h2><strong>Question:</strong> What is the shade/color of my poo?</h2>
    
    <div className="grid-container">  
    {stoolColors.map( (stoolColor, index) =>
      <Link key={index} to={`${match.params.shapeCode}/${stoolColor.colorCode}`}>
        <Card 
          key={index}
          cardImage={stoolColor.imagePath}
          cardAltAttibute={stoolColor.imageAlt}
          cardTitle={stoolColor.color}
          cardText={stoolColor.description} />
      </Link>
    )}
    </div>
  </div>
)

export default ColorGrid;
