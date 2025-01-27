import React, { useEffect, useRef, useState } from 'react'
import Card from '../Assets/Card.js'

const Home = ({setCurrentMusic, search, user, setUser, musics}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [filteredMusic, setFilteredMusic] = useState([]);

useEffect(() => {
  const filtered = musics.filter((music) => 
    music.song_name.toLowerCase().includes(search.toLowerCase()) || music.artist.toLowerCase().includes(search.toLowerCase())
  );
  setFilteredMusic(filtered);
}, [search, musics]);

// let curr=musics;
  return (
    <div className=' grid gap-3 grid-cols-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 w-full mt-5'>
    {
      search ? (filteredMusic.length>0 ? 
        filteredMusic.map((music) => {
          return (
            <div className='m-2' key={music._id}><Card setCurrentMusic={setCurrentMusic} setUser={setUser} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.image} song_name = {music.song_name} artist = {music.artist} url = {music.url} user = {user} id = {music._id}/></div>) })
          : (<div className='mt-5'><h1 className='text-2xl'>No Song Found . . .</h1></div>)
          )
      : musics.map((music) => {
        return (
          <div className=' m-2' key={music._id}><Card setCurrentMusic={setCurrentMusic} setUser={setUser} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.image} song_name = {music.song_name} artist = {music.artist} url = {music.url} user = {user} id = {music._id}/></div>) })
      
    }
    </div>
  )
}

export default Home