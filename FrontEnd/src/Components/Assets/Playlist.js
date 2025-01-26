import React from 'react'
import PlaylistItems from './PlaylistItems'
import { Link } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
// import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const Playlist = ({user, setMusics}) => {
  return (
    <div className='mt-6'>
        <Link to='/playlist' className='font-bold ml-2' >PLAYLISTS</Link>
        <div className='mt-3 max-h-52 overflow-y-auto'>
        {
            user==null?(
            <div></div>)
            :(
            user.playlists.map((playlist)=>(
                  <PlaylistItems key = {playlist._id} playlist={playlist} setMusics={setMusics}/>
            ))
        )
        }
        </div>
    </div>
  )
}

export default Playlist