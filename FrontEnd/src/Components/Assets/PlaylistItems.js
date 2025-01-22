import { faEarListen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaylistItems = ({playlist, setMusics}) => {

  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/playlist/${playlist._id}`)
  }
  return (
    
    <div className='ml-3 m-3'><FontAwesomeIcon icon={faEarListen} className="text-1xl text-black-500 mr-3" /><button onClick={handleClick}>{playlist.name.charAt(0).toUpperCase() + playlist.name.slice(1)}</button></div>
  )
}

export default PlaylistItems