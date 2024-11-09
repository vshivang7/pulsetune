import React from 'react'
import Card from '../Assets/Card'

const Home = ({musics}) => {
  return (
    <div className='flex flex-wrap w-full justify-evenly mt-5'>
    {
      musics.map((music) => {
        return (
          <div className='w-1/4 m-2' key={music.id}><Card image = {music.album.images[0].url} song_name = {music.name} artist = {music.artists[0].name} url = {music.preview_url}/></div>
        )
      })
    }
    </div>
  )
}

export default Home