import { faCirclePause, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'


const Player = ({setPreQueue, preQueue, postQueue, setPostQueue, currentMusic, setCurrentMusic}) => {
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
  
  const handlePrev = () => {
    if(preQueue.length !== 0){
    setCurrentMusic(preQueue[preQueue.length-1]);
    setPreQueue(preQueue.slice(0, preQueue.length-1));
    setPostQueue([currentMusic, ...postQueue]);
    }
  }

  const handleNext = () => {
    if(postQueue.length !== 0){
    setCurrentMusic(postQueue[0]);
    setPostQueue(postQueue.slice(1, postQueue.length));
    setPreQueue([...preQueue, currentMusic]);
    }
  }

  return (
    <div className='flex justify-between border-t-[1px] border-gray-800 items-center h-16 w-full bottom-0 fixed bg-gray-900'>
      <div className='w-2/6 gap-3 flex items-center'>
          <img src={currentMusic.image} alt='music' className='ml-1 rounded-lg p-1 w-16 h-16'/>
          <div>
            <p className='text-lg opacity-90' >{currentMusic.song_name}</p>
            <p className='text-xs opacity-60' >{currentMusic.artist}</p>
          </div>
      </div>
      <div className='text-xl w-2/6 gap-12 flex justify-center h-full items-center relative'>
          <div className='group'>
            <FontAwesomeIcon className='hover:cursor-pointer hover:scale-110 hover:opacity-90  transition duration-200' onClick={handlePrev} icon={faAnglesLeft}/>
            <div className='hidden group-hover:flex justify-center items-end flex-col group-hover:opacity-70 absolute bottom-0 -left-32 text-sm h-full transition duration-500 ease-in-out w-64'> 
              {
                preQueue.length > 0?
                <>
                <div className='select-none'>
                  {
                  preQueue[preQueue.length-1].song_name.length > 20?
                  <>{preQueue[preQueue.length-1].song_name.slice(0, 18)}...</>
                  :
                  <>{preQueue[preQueue.length-1].song_name}</>
                }</div>
                <div className='select-none opacity-70'>{preQueue[preQueue.length-1].artist}</div>
                </>
                :<></>
              }
            </div>
            </div>
          {
            isPlaying? 
            <div><FontAwesomeIcon className='text-4xl hover:cursor-pointer hover:scale-105 hover:opacity-90  transition duration-200 ' onClick={handleClick} icon={faCirclePause}/></div>
            :
            <div><FontAwesomeIcon className='text-4xl hover:cursor-pointer hover:scale-105 hover:opacity-90  transition duration-200' onClick={handleClick} icon={faCirclePlay}/></div>
          }
          <div className='group'>
            <FontAwesomeIcon className='hover:cursor-pointer hover:scale-110 hover:opacity-90  transition duration-200' onClick={handleNext} icon={faAnglesRight}/>
            <div className='hidden group-hover:flex justify-center flex-col group-hover:opacity-70 absolute bottom-0 -right-32 text-sm h-full transition duration-500 ease-in-out w-64'> 
              {
                postQueue.length !==0?
                <>
                <div className='select-none'>{
                  postQueue[postQueue.length-1].song_name.length > 20?
                  <>{postQueue[0].song_name.slice(0, 18)}...</>
                  :
                  <>{postQueue[0].song_name}</>
                }</div>
                <div className='select-none opacity-70'>{postQueue[0].artist}</div>
                </>
                :<></>
              }
            </div>
          </div>
      </div>
      <div className='w-2/6 flex justify-center items-center'>Features</div>
    </div>
  )
}

export default Player