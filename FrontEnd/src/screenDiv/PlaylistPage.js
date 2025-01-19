import React, { useEffect } from 'react'
import PlaylistCard from '../Components/Assets/PlaylistCard'

const PlaylistPage = ({user, setUser}) => {

  useEffect(() => {
      const handlefetch = async () => {
        try {
          let res = await fetch("http://localhost:8080/userExist", {
            method: 'GET',
            credentials: 'include',
          });
    
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
    
          let data = await res.json();
          if (data) setUser(data);
        } catch (error) {
        }
      };
      handlefetch();
    }, [])

  return (
    <div className='mt-8'>
      <h1 className='text-2xl mb-5'>Your Playlists</h1>
    {
      user.playlists.length===0?<p>No Playlist Exists!</p>:
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 m-8">
      {user.playlists.map((playlist) => (
        <div key={playlist.id}>
          <PlaylistCard playlist={playlist} setUser={setUser} />
        </div>
      ))}
    </div>
    
    }
    </div>
  )
}

export default PlaylistPage