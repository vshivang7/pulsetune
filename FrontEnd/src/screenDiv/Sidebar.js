import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompactDisc, faPlus} from '@fortawesome/free-solid-svg-icons';
import { faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import Playlist from '../Components/Assets/Playlist';
import { Link } from 'react-router-dom';

const Sidebar = ({user, setMusics}) => {
  return (
    <div className='pt-6 text-gray-300 text-[17px] h-screen w-56 fixed border-r-[1px] border-gray-800 '>
            <div className='border-b-[1px] mb-4 border-gray-800'>
                <h1 className='font-bold pl-2 mb-2'>MENU</h1>
                <div className=' my-auto hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer p-3 w-full flex items-center gap-2 transition-all duration-200'><FontAwesomeIcon icon={faWpexplorer} className=" mx-4" />Explore</div>
                <div className=' my-auto hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer p-3 w-full flex items-center gap-2 transition-all duration-200'><FontAwesomeIcon icon={faCompactDisc} className="mx-4" />Albums</div>
                <div className=' my-auto hover:bg-gray-800 hover:text-gray-300 hover:cursor-pointer p-3 w-full flex items-center gap-2 transition-all duration-200'><FontAwesomeIcon icon={faSlack} className="mx-4" />Genres</div>
            </div>
            {
              user!=null?
              <>
                <div>
                <Playlist user={user} setMusics = {setMusics}/>
                </div>
                <div className='mt-5 flex justify-center'>
                <Link to="/playlist/new" className="flex my-auto w-full bg-gray-900 hover:bg-gray-800 hover:text-gray-300 m-3 rounded-3xl px-5 py-2 border border-gray-700 items-center justify-center gap-2 transition-all duration-200">
                <FontAwesomeIcon className="opacity-70 text-red-500 text-lg" icon={faPlus} /><span className="text-sm font-light">New Playlist</span></Link>
                </div>
              </>
            :
            <></>
            }
    </div>
  )
}

export default Sidebar