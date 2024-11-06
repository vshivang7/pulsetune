// Home.js
import React, { useEffect } from 'react';
import SongList from './SongList'

const Home = ({ songs, searchKey }) => {
    
    useEffect(() => {
        console.log("Updated artists data:", songs);  // Check if artists data is updated
    }, [songs]);

    return (
      <div className='flex flex-wrap justify-between '>
        <SongList songs={songs} /> 
      </div>
    );
};

export default Home;

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