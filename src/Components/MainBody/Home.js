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



// // Home.js
// import React, { useEffect } from 'react';
// import SongList from './SongList'

// const Home = ({ songs, searchKey }) => {
    
//     useEffect(() => {
//         console.log("Updated artists data:", songs);  // Check if artists data is updated
//     }, [songs]);

//     return (
//       <div className='flex flex-wrap justify-between '>
//         <SongList songs={songs} /> 
//       </div>
//     );
// };

// export default Home;

// // Home.js
// import React, { useEffect } from 'react';
// import ArtistList from './ArtistList';

// const Home = ({ artists, searchKey }) => {
    
//     useEffect(() => {
//         console.log("Updated artists data:", artists);  // Check if artists data is updated
//     }, [artists]);

//     return (
//       <div className='flex flex-wrap justify-between '>
//         <ArtistList artists={artists} /> 
//       </div>
//     );
// };

// export default Home;