import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="card">
    <img src={props.cardImage} alt={props.cardAltAttibute} />
    <p>
      <h3>{props.cardTitle}</h3>
      {props.cardText}
    </p>
  </div>
)

Card.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardAltAttibute: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
}

export default Card;