
import './css/App.css';
import React, { useState , useCallback } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Playlist from './components/Playlist';

import Spotify from './util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]); //init empty array of search results
  const [playlistName, setPlaylistName] = useState("New Playlist"); //init default name of the playlist
  const [playlistTracks, setPlaylistTracks] = useState([]); //init empty array of container for selected tracks

  /*
    Access Spotify class's search method and pass in song name then 
    return an array of songs and put it into setSearchResult setter method
  */

  /*const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);  
  }, []);*/

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  }

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
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="App-playlist">
        <SearchResult searchResults={searchResults} onAdd={addTrack} />
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
