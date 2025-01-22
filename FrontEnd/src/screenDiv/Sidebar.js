import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import Playlist from '../Components/Assets/Playlist';

const Sidebar = ({user, setMusics}) => {
  return (
    <div className=' text-gray-300 text-lg h-screen w-1/5 fixed'>
        <div className='h-[1vh]'></div>
        <div className='flex-col h-[80vh]'>
            <div className='h-1/3 rounded-xl p-4 m-4'>
                <h1 className='font-bold'>MENU</h1>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="mr-3" /><a href='/artists'>Explore</a></div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="mr-3" />Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="mr-3" />Genres</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="mr-3" />Artists</div>
            </div>
            <div className='h-1/3 rounded-xl p-4 m-4'>
                <h1 className='font-bold'>MY LIBRARY</h1>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="mr-3" />Explore</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="mr-3" />My Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="mr-3" />Favourites</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="mr-3" />Local</div>
            </div>
            <div className='h-1/3 rounded-xl p-4 m-4'>
                <Playlist user={user} setMusics = {setMusics}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar