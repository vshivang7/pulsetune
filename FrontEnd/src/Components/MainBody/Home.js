import React, { useEffect, useRef, useState } from 'react'
import Card from '../Assets/Card.js'

const Home = ({search, user, setUser, musics}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [filteredMusic, setFilteredMusic] = useState([]);

useEffect(() => {
  const filtered = musics.filter((music) => 
  music.song_name.includes(search)
  );
  setFilteredMusic(filtered);
}, [search]);
  return (
    <div className='flex flex-wrap w-full justify-evenly mt-5 mb-64'>
    {
      filteredMusic.map((music) => {
        return (
          <div className='w-1/4 h-fit m-2' key={music._id}><Card setUser={setUser} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.image} song_name = {music.song_name} artist = {music.artist} url = {music.url} user = {user} id = {music._id}/></div>
        )
      })
    }
    </div>
  )
}

export default Home