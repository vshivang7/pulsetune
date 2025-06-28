import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState, useCallback } from "react";

const Player = ({
  setPreQueue,
  preQueue,
  postQueue,
  setPostQueue,
  currentMusic,
  setCurrentMusic,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrev = () => {
    if (!preQueue || preQueue.length === 0) return;
    const lastSong = preQueue[preQueue.length - 1];
    setCurrentMusic(lastSong);
    setPreQueue(preQueue.slice(0, preQueue.length - 1));
    setPostQueue([currentMusic, ...postQueue]);
  };

  const handleNext = useCallback(() => {
    if (!postQueue || postQueue.length === 0) return;
    const nextSong = postQueue[0];
    setCurrentMusic(nextSong);
    setPostQueue(postQueue.slice(1));
    setPreQueue([...preQueue, currentMusic]);
  }, [postQueue, preQueue, setCurrentMusic, setPostQueue, setPreQueue, currentMusic]);

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentMusic?.url || "";
      if (currentMusic?.url) {
        audioRef.current.load();
      }
    }
  }, [currentMusic]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const onEnded = () => handleNext();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", onEnded);
    };
  }, [handleNext]);

  useEffect(() => {
    setIsPlaying(true);
  }, [currentMusic]);

  if (!currentMusic) {
    return (
      <div className="flex justify-between border-t-[1px] border-gray-800 items-center h-16 w-full bottom-0 fixed bg-gray-900">
        <div className="w-full text-center text-gray-400">
          No music selected
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-t-[1px] border-gray-800 w-full bottom-0 fixed bg-gray-900">
      <audio ref={audioRef} hidden />
      
      <div className="w-full flex flex-col items-center px-2">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          style={{
            background: `linear-gradient(to right, red ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%)`,
            transition: 'background 0.2s linear',
          }}
          className="w-full h-1 rounded-lg appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none 
                     [&::-moz-range-thumb]:appearance-none 
                     [&::-ms-thumb]:appearance-none"
        />
      </div>

      <div className="flex justify-between items-center h-16 w-full">
        <div className="xl:w-[30vw] gap-3 flex items-center">
          <img
            src={currentMusic.image}
            alt="music"
            className="ml-1 rounded-lg p-1 w-16 h-16"
          />
          <div>
            <p className="sm:text-lg text-xs opacity-90">
              {currentMusic.song_name.length > 30
                ? currentMusic.song_name.slice(0, 28) + "..."
                : currentMusic.song_name}
            </p>
            <p className="text-xs opacity-60">{currentMusic.artist}</p>
          </div>
        </div>

        <div className="text-xl w-cover xl:w-[40vw] gap-6 xl:gap-12 flex justify-center h-full items-center relative mx-2 md:mx-4">
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110 hover:opacity-90 transition duration-200"
            onClick={handlePrev}
            icon={faAnglesLeft}
          />

          {isPlaying ? (
            <FontAwesomeIcon
              className="text-4xl hover:cursor-pointer hover:scale-105 hover:opacity-90 transition duration-200"
              onClick={handleClick}
              icon={faCirclePause}
            />
          ) : (
            <FontAwesomeIcon
              className="text-4xl hover:cursor-pointer hover:scale-105 hover:opacity-90 transition duration-200"
              onClick={handleClick}
              icon={faCirclePlay}
            />
          )}

          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110 hover:opacity-90 transition duration-200"
            onClick={handleNext}
            icon={faAnglesRight}
          />
        </div>

        <div className="hidden xl:flex xl:w-[30vw] justify-center items-center">
          Features
        </div>
      </div>
    </div>
  );
};

export default Player;
