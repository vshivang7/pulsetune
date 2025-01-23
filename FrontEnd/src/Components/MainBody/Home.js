import React, { useEffect, useRef, useState } from 'react'
import Card from '../Assets/Card.js'

const Home = ({search, user, setUser, musics}) => {
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
    <div className='flex flex-wrap w-full justify-evenly mt-5 mb-64'>
    {
      search ? (filteredMusic.length>0 ? 
        filteredMusic.map((music) => {
          return (
            <div className='w-1/4 h-fit m-2' key={music._id}><Card setUser={setUser} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.image} song_name = {music.song_name} artist = {music.artist} url = {music.url} user = {user} id = {music._id}/></div>) })
          : (<div className='w-full h-96 flex justify-center items-center'><h1 className='text-2xl'>No Song Found</h1></div>)
          )
      : musics.map((music) => {
        return (
          <div className='w-1/4 h-fit m-2' key={music._id}><Card setUser={setUser} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} audioRef = {audioRef} image = {music.image} song_name = {music.song_name} artist = {music.artist} url = {music.url} user = {user} id = {music._id}/></div>) })
      
    }
    </div>
  )
}

export default Home