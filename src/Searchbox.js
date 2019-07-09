import React from 'react';

const Searchbox = ({searchChange, clickButton}) => {
    return (
        <div>
            <input type='search' 
            placeholder='gib advice on...' 
            onChange={searchChange}
            />
            <button onClick={clickButton}>Search</button>
        </div>
    );
}

export default Searchbox;