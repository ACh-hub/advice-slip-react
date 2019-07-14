import React from 'react';
import PropTypes from 'prop-types'; 
import './AdviceCard.css';
import halibut from '../components/halibut-of-truth-small.png';

const AdviceCard = props => (
            <div className="AdviceCard">
            <img src={halibut} style={{width: 100+`vw`}} alt="Halibut of truth"></img>
            <h2>Enlightened Halibut Says</h2>
            <p>{props.advice}</p>
            </div>
            );


AdviceCard.propTypes = {
    advice: PropTypes.string.isRequired
}

export default AdviceCard;