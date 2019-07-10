import React from 'react';

const Searchbox = ({searchChange,clickButtonSearch}) => {
    return (
        <div>
            <input type='search' 
            placeholder='gib advice on...' 
            onChange={searchChange}
            />
            <button onClick={clickButtonSearch}>Search</button>
        </div>
    );
}

export default Searchbox;