import { faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from "react-router-dom";

const PlaylistSongs = ({ music, playlistID, setUser, setCurrentMusic}) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8080/playlist/${playlistID}/music/${music._id}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    let data = await response.json();
    console.log(data);
    setUser(data);
    navigate(`/playlist/${playlistID}`);
}
const playMusic = () => {
  setCurrentMusic(music);
};
  return (
      <>
    
    <div className="relative bg-gray-900 h-full shadow-lg rounded p-3 group">
    <div className="absolute cursor-pointer top-3 right-3 z-50 hover:bg-gray-400 hover:bg-opacity-45 rounded-full h-8 w-8 flex items-center justify-center transition-all gap-x-1.5 text-sm font-semibold text-white shadow-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
          <div onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/></div>
        </div>
        <div className="group relative">
          <img
            className="w-full block rounded-md"
            src={music.image}
            alt={`Album cover for ${music.song_name} by ${music.artist}`}
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
          <h3 className="text-white text-lg">{music.song_name.length > 17 ? `${music.song_name.slice(0, 14)}...` : music.song_name}</h3>
        </div>
        <div className='flex justify-between'>
          <p className="mt-1 text-gray-400">{music.artist}</p>
        </div>
        
    </div>
    </>
  );
};

export default PlaylistSongs;