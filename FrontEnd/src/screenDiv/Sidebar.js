import React from 'react'
import PulseTuneLogo from '../Components/PulseTune_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompactDisc} from '@fortawesome/free-solid-svg-icons';
import { faGratipay, faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=' h-screen w-1/5 m-1 p-1'>
        <div className='flex justify-center font-extrabold h-[6vh]'>
            <img src={PulseTuneLogo} alt="PulseTune Logo" className='h-12 rounded-2xl m-1' />
            <div className='text-4xl h-full text-blue-800 p-2 font-serif logoCol'><Link to="/">PulseTune</Link></div>
        </div>
        <div className='h-[1vh]'></div>
        <div className='flex-col h-[80vh]'>
            <div className='h-1/3 bg-white rounded-xl p-4 shadow-md m-4'>
                <h1 to="/" className='font-bold'><Link>MENU</Link></h1>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" /><Link>Albums</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" /><Link>Genres</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" /><Link>Explore</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" /><Link>Artists</Link></div>
            </div>

            <div className='h-1/3 bg-white rounded-xl p-4 shadow-md m-4'>
                <h1 className='font-bold'><Link>MY LIBRARY</Link></h1>
                {/* <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr<Link>-3" />Explore</div> */}
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" /><Link>My Playlists</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faGratipay} className="text-1xl text-black-500 mr-3" /><Link>Favourites</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" /><Link>My Albums</Link></div>
            </div>

            <div className='h-1/3 bg-white rounded-xl p-4 shadow-md m-4'>
                <h1 to="/" className='font-bold'>PLAYLISTS</h1>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" /><Link>Bollywood MashUp</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" /><Link>Top 100 Songs</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" /><Link>Best of 2024</Link></div>
                <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" /><Link>Pop Songs</Link></div>
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar