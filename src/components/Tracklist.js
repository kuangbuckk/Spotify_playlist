import React, { useState } from 'react';
import Track from './Track';

import '../css/Tracklist.css';

//props.tracks is an array of tracks (objects)

/*
    Search results
    3.2: Receives tracks (an object) and onAdd which includes addTrack func 
    from parent component(SearchResults) and pass it into Track

    Selected tracks
    3.3: Receives selected tracks, isRemoval boolean and onRemove props including App's removeTrack func
*/
const TrackList = (props) => {
    return (
        <div className='TrackList'>
            {props.tracks.map((track)=>{
                return (
                    <Track
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    onRemove={props.onRemove}
                    />
                )
            })}
        </div>
    )
} 

export default TrackList;