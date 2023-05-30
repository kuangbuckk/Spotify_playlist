import React, { useState } from 'react';
import TrackList from './Tracklist';

import '../css/SearchResult.css';

const SearchResult = (props) => {
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