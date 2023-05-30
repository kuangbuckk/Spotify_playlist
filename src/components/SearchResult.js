import React, { useState } from 'react';
import TrackList from './Tracklist';

import '../css/SearchResult.css';

const SearchResult = (props) => {
    //2.2: insert searchResults from parent component into child component and onAdd which includes addTrack func
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <TrackList
                tracks={props.searchResults} onAdd={props.onAdd} 
            />
        </div>
    );
}

export default SearchResult;