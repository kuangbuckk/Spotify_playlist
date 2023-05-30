import React, { useState } from 'react';
import Track from './Track';

import '../css/Tracklist.css';

//props.tracks is an array of tracks 
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