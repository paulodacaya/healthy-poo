import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.cardImage} alt={props.cardAltAttibute} />
      </div>
      <div className="card-text"> 
        <h3>{props.cardTitle}</h3>
        <p>{props.cardText}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardAltAttibute: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
}

export default Card;