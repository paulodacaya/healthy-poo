import React from 'react';
import { Link } from 'react-router-dom';

//components
import Card from './Card';

//data
import stoolShapes from '../data/stoolShapes';

const ShapeGrid = () => {

  return (
    <div className="wrapper">
      <h2><strong>Question:</strong> What is the shape of my poo (Bristol Stool Chart)?</h2>
      <div className="grid-container">
        
        {stoolShapes.map( (stoolShape, index) => (
          <Link key={index} to={`/${stoolShape.shapeCode}`}>
            <Card 
              key={index}
              cardImage={stoolShape.imagePath}
              cardAltAttibute={stoolShape.imageAlt}
              cardTitle={stoolShape.type}
              cardText={stoolShape.description} />
          </Link>
        ))}

      </div>
    </div>
  )
}

export default ShapeGrid; 