import React, { useEffect } from 'react';
import SongList from './SongList.js';
import ArtistList from './ArtistList.js';

const Home = ({ artists, songs }) => {
    useEffect(() => {
        console.log("Artists data:", artists);
        console.log("Songs data:", songs);
    }, [artists, songs]);

    return (
        <div className="flex items-start mt-4 pl-2 pr-0 space-x-2">
            {/* Songs Section */}
            <div className="w-9/12 h-min bg-gray-800 rounded-lg shadow-lg p-3">
                <h2 className="text-2xl font-bold text-gray mb-4">Songs</h2>
                {/* <div className="grid grid-rows-10 grid-cols-2 gap-2"> */}
                <div className="flex flex-wrap justify-evenly items-center">
                    <SongList songs={songs} />
                </div>
            </div>

            {/* Artists Section */}
            <div className="w-3/12 bg-gray-800 rounded-lg shadow-lg p-3">
                <h2 className="text-2xl font-bold text-gray mb-4">Artists</h2>
                {/* <div className="justify-center grid grid-cols-2 gap-2"> */}
                <div className="flex flex-wrap justify-center items-center">
                    <ArtistList artists={artists} />
                </div>
            </div>
        </div>

    );
};

export default Home;

        // <div className="flex items-top pt-7">
        //     <div className="w-8/12">
        //         <h2 className="text-xl font-bold mb-4">Songs</h2>
        //         <div className='flex flex-wrap justify-between'><SongList songs={songs} /></div>
        //     </div>
        //     <div className="w-4/12">
        //         <h2 className="text-xl font-bold mb-4">Artists</h2>
        //         <div className='flex flex-wrap justify-between'><ArtistList artists={artists} /></div>
        //     </div>
        // </div>