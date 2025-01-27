import React from 'react'
import PlaylistItems from './PlaylistItems'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
// import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const Playlist = ({user, setMusics}) => {
  return (
    <div className='mt-6'>
        <div  className='font-bold ml-2 flex justify-between items-center' ><div>PLAYLISTS</div>
            <Link to='/playlist' className='transition-all duration-300 hover:origin-left hover:scale-x-125 mr-10'><FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        <div className='mt-3 max-h-52 overflow-y-auto scrollbar-hide'>
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