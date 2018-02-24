import React from 'react';
import { Link } from 'react-router-dom';

//components
import Card from './Card';

//data
import stoolShapes from '../data/stoolShapes';
import stoolColors from '../data/stoolColors';
import Notfound from './Notfound';

const ColorGrid = ({ match }) => {

  // Need to check to see if url paramters match exisiting data.
  // if there is NO match, render the 404 page.
  // NOTE: unable to test through Switch component in React Router 4
  // so programming matches through function

  const validateURL = param => {
    for(let i = 0; i < stoolShapes.length; i++) {
      if(stoolShapes[i].code === param) {
        return true;
      }
    }
  }

  const { shapeCode } = match.params;

  if(validateURL( shapeCode )) {
    return (
      <div className="wrapper">
        <h2><strong>Question:</strong> What is the shade/color of my poo?</h2>
        
        <div className="grid-container">  
        {stoolColors.map( (stoolColor, index) =>
          <Link key={index} to={`${match.params.shapeCode}/${stoolColor.code}`}>
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
  } else {
    return <Notfound />;
  }
  
}

export default ColorGrid;
