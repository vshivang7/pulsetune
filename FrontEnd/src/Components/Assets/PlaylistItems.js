import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaylistItems = ({playlist, setMusics}) => {

  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/playlist/${playlist._id}`)
  }
  return (
    
    <div className='ml-3 m-3'><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" /><button onClick={handleClick}>{playlist.name}</button></div>
  )
}

export default PlaylistItems