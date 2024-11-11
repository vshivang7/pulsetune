// ArtistList.js
import React from 'react';

const SongList = ({ artists = [] }) => {  // Set default to empty array
    if (!artists.length) {
        return <p>No artists found</p>;  // Optional: Display message if no artists
    }

    return artists.map(artist => (
        <div className = "w-36 m-4 flex flex-col justify-center items-center" key={artist.id}>
            {artist.images.length ? (
                 <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                 <img
                     className='w-20 aspect-square rounded-full hover:opacity-80 transition-opacity transition-duration:100ms'
                     src={artist.images[0].url}
                     alt={`${artist.name} profile`}
                 />
             </a>
            ) : (
                <div>No Image</div>
            )}
            <p>{artist.name}</p>
        </div>
    ));
};

export default SongList;