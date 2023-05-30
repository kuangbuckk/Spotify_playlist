import React, { useState } from 'react';

import '../css/Track.css';
const Track = (props) => {
    const addTrack = (event) => {
        props.onAdd(props.track);
    }

    const removeTrack = (event) => {
        props.onRemove(props.track)
    }

    const renderAction = () => {
        if(props.isRemoval){
            return (
                <button className='Track-action' onClick={removeTrack}> 
                    -
                </button>
            );
        }

        return (
            <button className='Track-action' onClick={addTrack}>
                +
            </button>
        );
    }

    /*
        Search result
        4.2: Receives an object of track from Tracklist to pass into this component, then in renderAction, if 
        we click the add button it will provoke addTrack func which is passed down from App component

        Selected tracks
        4.3: Receives an object of track from Tracklist to pass into this component and isRemoval boolean 
        then in renderAction if we click the remove button it will provoke removeTrack func which is passed
        down from App component
    */
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track;