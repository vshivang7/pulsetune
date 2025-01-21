import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistSongs from './PlaylistSongs';

const PlaylistMusicsDisplay = ({setUser}) => {
  const { id } = useParams(); // Extract playlist ID from URL
  const [playlistMusics, setPlaylistMusics] = useState([]); // State for music array
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for errors

  // Fetch playlist musics from backend
  useEffect(() => {
    const fetchPlaylistMusics = async () => {
      try {
        const response = await fetch(`http://localhost:8080/playlist/${id}`, {
            credentials:'include'
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch playlist musics: ${response.status}`);
        }
        const data = await response.json();
        setPlaylistMusics(data); // Update state with fetched data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message);
        setLoading(false); // Ensure loading stops even on error
      }
    };

    fetchPlaylistMusics();
  }, [id]);

  // Render loading, error, or playlist music
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='mt-9'>
      <h1 className='text-2xl mb-5'>Playlist Musics</h1>
      {playlistMusics.length === 0 ? (
        <div>No musics found in this playlist.</div>
      ) : (
        <ul className='mt-10'>
          {playlistMusics.map((music) => (
            <li key={music._id} className="mb-4">
                <PlaylistSongs music={music} playlistID={id} setUser={setUser}/>
              {/* <h3 className="text-lg font-bold">{music.song_name}</h3>
              <p className="text-sm">Artist: {music.artist}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistMusicsDisplay;
