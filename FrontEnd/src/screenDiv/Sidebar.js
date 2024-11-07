import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompactDisc, faNoteSticky} from '@fortawesome/free-solid-svg-icons';
import { faGratipay, faSlack, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar h-screen bg-gray-900 text-white p-6 shadow-lg">
    {/* Sidebar Container */}
    <div className="flex flex-col space-y-2 h-[75vh]">
        
        {/* Menu Section */}
        <div className="p-4 pt-2 pb-2">
            <h1 className="font-bold text-md mb-2">MENU</h1>
            <div className="space-y-1">
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faCompactDisc} className="mr-3 text-lg" />
                    <span>Albums</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faSlack} className="mr-3 text-lg" />
                    <span>Genres</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faWpexplorer} className="mr-3 text-lg" />
                    <span>Explore</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faUser} className="mr-3 text-lg" />
                    <span>Artists</span>
                </Link>
            </div>
        </div>

        {/* My Library Section */}
        <div className="p-4 pt-2 pb-2">
            <h1 className="font-bold text-md mb-2 ">MY LIBRARY</h1>
            <div className="space-y-1">
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faUser} className="mr-3 text-lg" />
                    <span>My Playlists</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faGratipay} className="mr-3 text-lg" />
                    <span>Favourites</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faCompactDisc} className="mr-3 text-lg" />
                    <span>My Albums</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faNoteSticky} className="mr-3 text-lg" />
                    <span>Local</span>
                </Link>
            </div>
        </div>

        {/* Playlists Section */}
        <div className="p-4 pt-2 pb-2">
            <h1 className="font-bold text-md mb-2 ">PLAYLISTS</h1>
            <div className="space-y-1">
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faWpexplorer} className="mr-3 text-lg" />
                    <span>MashUps</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faCompactDisc} className="mr-3 text-lg" />
                    <span>Top 100 Songs</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faSlack} className="mr-3 text-lg" />
                    <span>Best of 2024</span>
                </Link>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition duration-200">
                    <FontAwesomeIcon icon={faUser} className="mr-3 text-lg" />
                    <span>Pop Songs</span>
                </Link>
            </div>
        </div>
    </div>
</div>

  )
}

export default Sidebar
    // <div className='sidebar h-screen w-1/5'>  
    //     <div className='flex-col h-[75vh]'>
    //         <div className='h-1/3  rounded-xl p-4 shadow-md m-4'>
    //             <h1 to="/" className='font-bold'><Link>MENU</Link></h1>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" /><Link>Albums</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" /><Link>Genres</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" /><Link>Explore</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" /><Link>Artists</Link></div>
    //         </div>

    //         <div className='h-1/3  rounded-xl p-4 shadow-md m-4'>
    //             <h1 className='font-bold'><Link>MY LIBRARY</Link></h1>
    //             {/* <div className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr<Link>-3" />Explore</div> */}
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" /><Link>My Playlists</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faGratipay} className="text-1xl text-black-500 mr-3" /><Link>Favourites</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" /><Link>My Albums</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faNoteSticky} className="text-1xl text-black-500 mr-3" /><Link>Local</Link></div>
    //         </div>

    //         <div className='h-1/3 rounded-xl p-4 shadow-md m-4'>
    //             <h1 to="/" className='font-bold'><Link>PLAYLISTS</Link></h1>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faWpexplorer} className="text-1xl text-black-500 mr-3" /><Link>MashUps</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faCompactDisc} className="text-1xl text-black-500 mr-3" /><Link>Top 100 Songs</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faSlack} className="text-1xl text-black-500 mr-3" /><Link>Best of 2024</Link></div>
    //             <div to="/" className='ml-3 m-3 '><FontAwesomeIcon icon={faUser} className="text-1xl text-black-500 mr-3" /><Link>Pop Songs</Link></div>
    //         </div>
    //     </div>
    // </div>