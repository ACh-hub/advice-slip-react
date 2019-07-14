import React from 'react';

const Searchbox = ({searchBoxValue, searchBarHandler, searchBarSubmitHandler,
searchBoxStyle, searchBoxTextFocusHandler}) => {
    const handleChange = event => searchBarHandler(event.target.value);
    const handleSearchClick = event => searchBarSubmitHandler(event);
    const handleFocus = event => searchBoxTextFocusHandler(event);


    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="gib advice on..." 
                    style = {searchBoxStyle} 
                    value={searchBoxValue} 
                    onChange={handleChange} 
                    onFocus={handleFocus}
                    />
                    <button onClick={handleSearchClick}>Search</button>
                </form>
        </div>
    );
}

export default Searchbox;