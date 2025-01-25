import { faAnglesLeft, faAnglesRight, faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'


const Player = ({currentMusic}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  }

  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize the audio instance only once
    if (currentMusic?.url && !audioRef.current) {
      audioRef.current = new Audio(currentMusic.url);
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((error) => console.error("Error playing music:", error));
      } else {
        audioRef.current.pause();
      }
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying, currentMusic]);

  useEffect(() => {
    return () => {
          setIsPlaying(true);
          audioRef.current = null;
    };
  }, [currentMusic]);

  return (
    <div className='flex justify-between items-center h-16 w-full bottom-0 fixed bg-slate-900'>
      <div className='w-2/6 gap-3 flex items-center'>
          <img src={currentMusic.image} alt='music' className='rounded-lg p-1 w-16 h-16'/>
          <div>
            <p className='text-lg opacity-90' >{currentMusic.song_name}</p>
            <p className='text-xs opacity-60' >{currentMusic.artist}</p>
          </div>
      </div>
      <div className='text-xl w-2/6 gap-20 flex justify-center items-center'>
          <div><FontAwesomeIcon className='hover:cursor-pointer hover:scale-110 hover:opacity-90  transition duration-200' icon={faAnglesLeft}/></div>
          {
            isPlaying? 
            <div><FontAwesomeIcon className='text-4xl hover:cursor-pointer hover:scale-105 hover:opacity-90  transition duration-200 ' onClick={handleClick} icon={faCirclePause}/></div>
            :
            <div><FontAwesomeIcon className='text-4xl hover:cursor-pointer hover:scale-105 hover:opacity-90  transition duration-200' onClick={handleClick} icon={faCirclePlay}/></div>
          }
          <div><FontAwesomeIcon className='hover:cursor-pointer hover:scale-110 hover:opacity-90  transition duration-200' icon={faAnglesRight}/></div>
      </div>
      <div className='w-2/6 flex justify-center items-center'>Features</div>
    </div>
  )
}

export default Player