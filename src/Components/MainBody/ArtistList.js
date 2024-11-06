// ArtistList.js
import React from 'react';

const SongList = ({ artists = [] }) => {  // Set default to empty array
    if (!artists.length) {
        return <p>No artists found</p>;  // Optional: Display message if no artists
    }

    return artists.map(artist => (
        <div className = "w-40 m-4 flex flex-col items-center" key={artist.id}>
            {artist.images.length ? (
                <img className='w-64 h-40 rounded-full' src={artist.images[0].url} alt="" />
            ) : (
                <div>No Image</div>
            )}
            <p>{artist.name}</p>
        </div>
    ));
};

export default SongList;