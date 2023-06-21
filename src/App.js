import './css/App.css';
import React, { useState , useCallback } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Playlist from './components/Playlist';
import Profile from './components/Profile';

import Spotify from './util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]); //init empty array of search results
  const [playlistName, setPlaylistName] = useState("New Playlist"); //init default name of the playlist
  const [playlistTracks, setPlaylistTracks] = useState([]); //init empty array of container for selected tracks
  const [profile, setProfile] = useState({});

  const getProfile = useCallback(()=>{
    Spotify.getProfile().then(setProfile);
    console.log('get profile');
  }, []);
  window.onload = function() {
    getProfile();
  }

  /*
    Access Spotify class's search method and pass in song name then 
    return an array of songs and put it into setSearchResult setter method
  */

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);  
  }, []);
  
  //4: search now receives term to pass into Spotify util API fetch to return results
  // const search = (term) => {
  //   Spotify.search(term).then(setSearchResults);
  // }

  /*
    5.2: this func is provoked in Track component and pass in the track object then add it in the
    setPlaylist setter method for selected songs inserting into playlist if havent added in yet
  */
  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id) //filter function picks elements satisfies the condition
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
    <h1>
      Bach<span className="highlight"> Jamming</span>
    </h1>

    <div className='profile-information'>
      <Profile profile={profile}/>
    </div>
    
    <div className="App">
      {/*3.1: onSearch receives term value from child component and pass into parent search func*/}
      <SearchBar onSearch={search}/> 
      <div className="App-playlist">
        {/*//1.2: insert searchResults array into props and onAdd func*/}
        <SearchResult searchResults={searchResults} onAdd={addTrack}/> 
        {/*1.3: pass in playlistName and an array of playlistTracks which contains track objects and other functions*/}
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  </div>
  );
}

export default App;
