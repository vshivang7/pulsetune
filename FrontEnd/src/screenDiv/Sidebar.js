import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className=' h-screen w-1/5 fixed'>
        <div className='h-[1vh]'></div>
        <div className='flex-col h-[80vh]'>
            <div className='h-1/3 rounded-xl p-4 m-4'>
                <h1 className='font-bold'>MENU</h1>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Explore</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Genres</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Artists</div>
            </div>
            <div className='h-1/3 rounded-xl p-4 m-4'>
                <h1 className='font-bold'>MY LIBRARY</h1>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Explore</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />My Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Favourites</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Local</div>
            </div>
            <div className='h-1/3 rounded-xl p-4 m-4'>
                <h1 className='font-bold'>PLAYLISTS</h1>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Bollywood MashUp</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />Top 100 Songs</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Best of 2024</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Pop Songs</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar