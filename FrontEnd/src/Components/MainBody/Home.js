import React, { useRef, useState } from 'react'
import Card from '../Assets/ArtistPage'

const Home = ({musics, user, setUser}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className='flex flex-wrap w-full justify-evenly mt-5 mb-64'>
    {
      musics.map((music) => {
        return (
          <div className='w-1/4 h-96 m-2' key={music._id}><Card setUser={setUser} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.image} song_name = {music.song_name} artist = {music.artist} url = {music.url} user = {user} id = {music._id}/></div>
        )
      })
    }
    </div>
  )
}

export default Home