import React, { useState, useCallback } from 'react';
import '../css/SearchBar.css';

import '../css/SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    //From now on, term has a new value so we pass it in
    const search = () => {
        props.onSearch(term);
    }
    

    /*
    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);
    */
    return (
        <div className='SearchBar'>
            <input placeholder='Enter a song title' onChange={handleTermChange}/>
            <button className='SearchButton' onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;