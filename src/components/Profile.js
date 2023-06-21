import React, { useState } from 'react';
import '../css/Profile.css';
const Profile = (props) => {
    
    return (
        <div className='profile'>
            <h2>Logged in as {props.profile.display_name}</h2>
            <ul>
                <li>ID: {props.profile.id}</li>
                <li>Type: {props.profile.type}</li>
                <li>Followers: {props.profile.follower_count}</li>
                <li><img className='profile-pic' src={props.profile.image_url} alt='profile-pic'/></li>
            </ul>
        </div>
    )
}

export default Profile;