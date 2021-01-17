import React from 'react';

    function SearchBar({ handleSubmit, handleChange, searchString }) {

        return (

            <form onSubmit={handleSubmit}>

            <input placeholder="Search photos"
                   type="text"
                   name="searchString"
                   required
                   onChange={handleChange}
                   value={searchString} 
            />
            
            <button type="submit">Search</button>
            
        </form>
    );

}

export default SearchBar;