import React from 'react';
import DropDown from './DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Card = ({ image, song_name, artist, url, isPlaying, setIsPlaying, audioRef, user, id, setUser, setCurrentMusic}) => {
  const musicInfo = {
    _id: id,
    image: image,
    song_name: song_name,
    artist: artist,
    url: url
  }
  const playMusic = () => {
    setCurrentMusic(musicInfo);
  };

  return (
    <>
    
    <div className="relative bg-gray-900 h-full shadow-lg rounded p-3 group">
        <div className="absolute top-3 right-3 z-50 ">
          <DropDown user={user} musicInfo={musicInfo} setUser={setUser} />
        </div>

        <div className="group relative">
          <img
            className="w-full block rounded-md"
            src={image}
            alt={`Album cover for ${song_name} by ${artist}`}
          />
          <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 w-full h-full top-0 flex items-center group-hover:opacity-100 justify-evenly">
            <button
              className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
              onClick={playMusic}>
              <FontAwesomeIcon icon={faPlay} className="text-3xl" />
            </button>
          </div>
        </div>
        <div className="mt-1">
          <h3 className="text-white text-lg">{song_name.length > 17 ? `${song_name.slice(0, 14)}...` : song_name}</h3>
        </div>
        <div className='flex justify-between'>
          <p className="mt-1 text-gray-400">{artist}</p>
        </div>
        
    </div>
    </>
  );
};

export default Card;
