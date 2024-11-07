// ArtistList.js
import React from 'react';

const SongList = ({ artists = [] }) => {  // Set default to empty array
    if (!artists.length) {
        return <p className='text-gray-400'>No artists found</p>;  // Optional: Display message if no artists
    }

    return artists.map(artist => (
        <div className = "w-fit m-4 flex flex-col justify-center items-center" key={artist.id}>
            {artist.images.length ? (
                 <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                 <img
                     className='w-20 aspect-square rounded-full hover:opacity-80 transition-opacity duration:100ms'
                     src={artist.images[0].url}
                     alt={`${artist.name} profile`}
                 />
             </a>
            ) : (
                <div>No Image</div>
            )}
            <p className='text-center break-words'>{artist.name}</p>
        </div>
    ));
};

export default SongList;