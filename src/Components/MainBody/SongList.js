import React from 'react';

const SongList = ({ songs = [] }) => {
    if (!songs.length) {
        return <p>No songs found</p>;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {songs.map(song => (
                <div className="w-90 m-4 flex flex-col items-center p-4 bg-slate-200 rounded-3xl shadow-md" key={song.id}>
                    {/* Album Image */}
                    {/* {song.album.images.length ? (
                        <img className='w-48 h-48 rounded-lg' src={song.album.images[0].url} alt={`${song.name} album cover`} />
                    ) : (
                        <div className="w-48 h-48 flex items-center justify-center bg-gray-300 rounded-lg">No Image</div>
                    )} */}
                    
                    {/* Song and Artist Details */}
                    {/* <div className="mt-2 text-center">
                        <p className="font-bold text-lg">{song.name}</p>
                        <p className="text-gray-700">by {song.artists.map(artist => artist.name).join(", ")}</p>
                        <p className="text-gray-500 italic">{song.album.name}</p>
                    </div> */}

                    {/* Spotify Embed Player */}
                    <iframe
                        src={`https://open.spotify.com/embed/track/${song.id}`}
                        width="fit"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                        allowTransparency="true"
                        className=" p-0 rounded-fit"
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default SongList;


// import React from 'react';

// const SongList = ({ songs = [] }) => {
//     if (!songs.length) {
//         return <p>No songs found</p>;
//     }

//     return (
//         <div className="flex flex-wrap justify-center">
//             {songs.map(song => (
//                 <div className="w-60 m-4 flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md" key={song.id}>
//                     {/* Album Image */}
//                     {song.album.images.length ? (
//                         <img className='w-48 h-48 rounded-lg' src={song.album.images[0].url} alt={`${song.name} album cover`} />
//                     ) : (
//                         <div className="w-48 h-48 flex items-center justify-center bg-gray-300 rounded-lg">No Image</div>
//                     )}
                    
//                     {/* Song and Artist Details */}
//                     <div className="mt-2 text-center">
//                         <p className="font-bold text-lg">{song.name}</p>
//                         <p className="text-gray-700">by {song.artists.map(artist => artist.name).join(", ")}</p>
//                         <p className="text-gray-500 italic">{song.album.name}</p>
//                     </div>

//                     {/* Spotify Link (Play Button) */}
//                     <a
//                         href={song.external_urls.spotify}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-3 px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition">
//                         Play on Spotify
//                     </a>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SongList;
