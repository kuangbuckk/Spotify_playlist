import React, { useState } from 'react';
import TrackList from './Tracklist';

import '../css/Playlist.css';

const Playlist = (props) => {
    const handleNameChange = (event) => {
        props.onNameChange(event.target.value);
    }
    return (
        <div className='Playlist'>
            <input onChange={handleNameChange} defaultValue={'New Playlist'}/>
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className='Playlist-save' onClick={props.onSave}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;