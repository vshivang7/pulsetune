import React, { useRef, useState } from 'react'
import Card from '../Assets/ArtistPage'

const Home = ({musics, user}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className='flex flex-wrap w-full justify-evenly mt-5 mb-64'>
    {
      musics.map((music) => {
        return (
          <div className='w-1/4 h-1/4 m-2' key={music.id}><Card isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.album.images[0].url} song_name = {music.name} artist = {music.artists[0].name} url = {music.preview_url} user = {user} id = {music.id}/></div>
        )
      })
    }
    </div>
  )
}

export default Home