import React from 'react';
import './AdviceCard.css';

const AdviceCard = ({advice, clickButtonRandom}) => {
        return (
            <div className="AdviceCard">
            <picture srcSet="" alt="Enlightened Halibut"></picture>
            <h2>Enlightened Halibut Says</h2>
            <p>{advice}</p>
            <button onClick={clickButtonRandom}>Gib Advice!</button>
            </div>
        );
}

export default AdviceCard;