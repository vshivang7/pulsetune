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
    <div>{
        (user.playlists.map((playlist)=>(
            <div><PlaylistCard playlist={playlist}/></div>
        )))}
    </div>
    }
    </div>
  )
}

export default PlaylistPage