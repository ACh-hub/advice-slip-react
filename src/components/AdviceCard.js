import React from 'react';
import './AdviceCard.css';
import halibut from '../components/halibut-of-truth-small.png';

const AdviceCard = ({advice, clickButtonRandom}) => {
        return (
            <div className="AdviceCard">
            <img src={halibut} style={{width: 100+`vw`}} alt="Halibut of truth"></img>
            <h2>Enlightened Halibut Says</h2>
            <p>{advice}</p>
            <button onClick={clickButtonRandom}>Gib Advice!</button>
            </div>
        );
}

export default AdviceCard;