import React, { useEffect } from 'react';
import SongList from './SongList.js';
import ArtistList from './ArtistList.js';

const Home = ({ artists, songs }) => {
    useEffect(() => {
        console.log("Artists data:", artists);
        console.log("Songs data:", songs);
    }, [artists, songs]);

    return (
        <div className="flex items-top">
            <div className="w-8/12">
                <h2 className="text-2xl font-bold mb-4">Songs</h2>
                <div className='flex flex-wrap justify-between'><SongList songs={songs} /></div>
            </div>
            <div className="w-4/12 mb-8">
                <h2 className="text-2xl font-bold mb-4">Artists</h2>
                <div className='flex flex-wrap justify-between'><ArtistList artists={artists} /></div>
            </div>
        </div>
    );
};

export default Home;