import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistSongs from './PlaylistSongs';

const PlaylistMusicsDisplay = ({ setCurrentPlaylist, preQueue, setPreQueue, postQueue, setPostQueue, user, setUser, currentMusic, setCurrentMusic }) => {
  const { id } = useParams();
  const [playlistMusics, setPlaylistMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistMusics = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:8080/playlist/${id}`, {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch playlist musics: ${response.status}`);
        }
        const data = await response.json();
        setPlaylistMusics(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylistMusics();
  }, [id, user]);

  if (loading) return <div aria-live="polite" className="text-white p-4">Loading...</div>;
  if (error) return <div aria-live="assertive" className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className='mt-9'>
      <h1 className='text-2xl mb-5'>Playlist Songs</h1>
      {playlistMusics.length === 0 ? (
        <div>No musics found in this playlist.</div>
      ) : (
        <div className='grid gap-3 grid-cols-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 w-full mt-5'>
          {playlistMusics.map((music) => (
            <div key={music._id} className="m-2">
              <PlaylistSongs
                setCurrentPlaylist={setCurrentPlaylist}
                playlistMusics={playlistMusics}
                preQueue={preQueue}
                setPreQueue={setPreQueue}
                postQueue={postQueue}
                setPostQueue={setPostQueue}
                music={music}
                playlistID={id}
                setUser={setUser}
                currentMusic={currentMusic}
                setCurrentMusic={setCurrentMusic}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistMusicsDisplay;
