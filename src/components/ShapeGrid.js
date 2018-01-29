import React from 'react';
import { Link } from 'react-router-dom';

//components
import Card from './Card';

//data
import stoolShapes from '../data/stoolShapes';

const ShapeGrid = () => {

  return (
    <div className="wrapper">
      <h2><strong>Question:</strong> What is the shape of my poo?</h2>
      
      <div className="grid-container">
        
        {stoolShapes.map( (stoolShapes, index) => 
          <Link to="/shapes/colors">
            <Card 
              key={index}
              cardImage={stoolShapes.image}
              cardAltAttibute={stoolShapes.imageAlt}
              cardTitle={stoolShapes.type}
              cardText={stoolShapes.description} />
          </Link>
        )}

      </div>
    </div>
  )
}

export default ShapeGrid; 