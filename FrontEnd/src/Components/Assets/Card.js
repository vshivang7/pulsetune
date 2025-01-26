import React from 'react';
import DropDown from './DropDown';

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
      <div className="bg-gray-900 h-full shadow-lg rounded p-3">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
                >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
            </button>
          </div>
        </div>
        <div className="mt-1">
          <h3 className="text-white text-lg">{song_name.length > 23 ? `${song_name.slice(0, 20)}...` : song_name}</h3>
        </div>
        <div className='flex justify-between'>
          <p className="mt-1 text-gray-400">{artist}</p>
          <div>
              <DropDown user = {user} musicInfo = {musicInfo} setUser={setUser}/>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </>
  );
};

export default Card;
