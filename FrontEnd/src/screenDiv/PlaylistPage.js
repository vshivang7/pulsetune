import React from 'react'
import PlaylistCard from '../Components/Assets/PlaylistCard'

const PlaylistPage = ({user}) => {
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