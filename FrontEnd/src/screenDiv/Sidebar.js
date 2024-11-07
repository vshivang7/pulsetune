import React from 'react'
import PulseTuneLogo from '../Components/PulseTune_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className=' h-screen w-1/5 m-1 p-1'>
        <div className='flex justify-center font-extrabold h-[6vh]'>
            <img src={PulseTuneLogo} alt="PulseTune Logo" className='h-12 rounded-2xl m-1' />
            <div className='text-4xl h-full text-red-600 p-2 font-serif logoCol'>PulseTune</div>
        </div>
        <div className='h-[1vh]'></div>
        <div className='flex-col h-[80vh]'>
            <div className='h-1/3 bg-white rounded-xl p-4 shadow-md m-4'>
                <h1 className='font-bold'>MENU</h1>
                  
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Explore</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Genres</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Artists</div>
            </div>
            <div className='h-1/3 bg-white rounded-xl p-4 shadow-md m-4'>
                <h1 className='font-bold'>MENU</h1>
                  
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Explore</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Genres</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Artists</div>
            </div>
            <div className='h-1/3 bg-white rounded-xl p-4 shadow-md m-4'>
                <h1 className='font-bold'>MENU</h1>
                  
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" />Explore</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" />Albums</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" />Genres</div>
                <div className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" />Artists</div>
            </div>
            
            {/* <div className='h-1/3'>
                <h1 className='font-extrabold'>
                    LIBRARY
                </h1>
            </div>
            <div className='h-1/3'>
                <h1 className='font-extrabold'>
                  Playlists
                  </h1>
            </div> */}
        </div>
    </div>
  )
}

export default Sidebar