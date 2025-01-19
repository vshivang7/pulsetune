import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PlaylistItems = ({playlist, setMusics}) => {
  const handleClick = async () => {
    let response = await fetch(`http://localhost:8080/playlist/${playlist._id}`, {
      method: 'GET',
      credentials: 'include',
    })
    let data = await response.json();
    setMusics([...data]);
  }


  return (
    
    <div className='ml-3 m-3'><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" /><button onClick={handleClick}>{playlist.name}</button></div>
  )
}

export default PlaylistItems