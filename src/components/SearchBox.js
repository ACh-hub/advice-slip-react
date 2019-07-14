import React from 'react';

const Searchbox = ({searchBoxValue, searchBarHandler, searchBarSubmitHandler}) => {
    const handleChange = event => searchBarHandler(event.target.value);
    const handleSearchClick = event => {
        event.preventDefault();
        searchBarSubmitHandler()
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="gib advice on..."
                    value={searchBoxValue} 
                    onChange={handleChange}
                    />
                    <button onClick={handleSearchClick}>Search</button>
                </form>
        </div>
    );
}

export default Searchbox;