import React from 'react';

const Card = ({ image, song_name, artist, url, isPlaying, setIsPlaying, audioRef}) => {

  const playMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="bg-gray-900 h-full shadow-lg rounded p-3">
        <div className="group relative">
          <img
            className="w-full md:w-72 block rounded"
            src={image}
            alt={`Album cover for ${song_name} by ${artist}`}
          />
          <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            <button
              className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
              onClick={playMusic}
            >
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
        <div className="p-5">
          <h3 className="text-white text-lg">{song_name}</h3>
          <p className="text-gray-400">{artist}</p>
        </div>
      </div>
      <audio ref={audioRef} />
    </>
  );
};

export default Card;
