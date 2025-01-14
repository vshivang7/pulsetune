import React from 'react'
import PlaylistItems from './PlaylistItems'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
// import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const Playlist = ({user}) => {
  return (
    <div>
        <h1 className='font-bold'>PLAYLISTS</h1>
        {
            user==null?(
            <div>abc</div>)
            :(
            user.playlists.map((playlist)=>(
                <PlaylistItems key = {playlist._id} playlist={playlist}/>
            ))
        )
        }
    </div>
  )
}

export default Playlist



{/* <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Bollywood MashUp</div>
<div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />Top 100 Songs</div>
<div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Best of 2024</div>
<div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Pop Songs</div> */}