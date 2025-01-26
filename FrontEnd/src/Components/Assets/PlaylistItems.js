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
    
    <div className='p-3 hover:bg-gray-800 hover:text-gray-300 w-full transition-all duration-200 flex items-center gap-2 hover:cursor-pointer' onClick={handleClick}><FontAwesomeIcon icon={faEarListen} className="mx-4" /> {playlist.name.charAt(0).toUpperCase() + playlist.name.slice(1)}</div>
  )
}

export default PlaylistItems