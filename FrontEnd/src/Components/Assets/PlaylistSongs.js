import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from "react-router-dom";

const PlaylistSongs = ({ music, playlistID, setUser }) => {
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
  return (
    <div className="flex flex-col h-40 max-w-md text-white bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex max-w-md ">
          {/* Song Details Section */}
          <div className="flex-grow flex items-center p-1">
              {/* Song Image */}
              <img
                src={music.image}
                alt={music.song_name}
                className="w-16 h-16 rounded-full border-2 border-pink-600 object-cover"/>
              {/* Song Details */}
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-200">{music.song_name}</h2>
                <p className="text-sm text-gray-300">Artist: {music.artist}</p>
              </div>
          </div>

            {/* Remove Button */}
            <button
                onClick={handleDelete}
                className="h-9 m-4 px-3 text-sm bg-gray-700 hover:bg-gray-400 text-gray-600 rounded-lg self-center">
              <FontAwesomeIcon className='text-white' icon={faTrash} />
            </button>
      </div>

      {/* Music Player */}
      <audio 
        controls
        src={music.url}
        className="w-full rounded-lg p-1 invert hue-rotate-90 brightness-115">
      </audio>
</div>
  );
};

export default PlaylistSongs;
