import { faSlack } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PlaylistItems = ({playlist}) => {
  return (
    <div className='ml-3 m-3'><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />{playlist.name}</div>
  )
}

export default PlaylistItems