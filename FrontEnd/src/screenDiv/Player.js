import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const Player = ({
  setPreQueue,
  preQueue,
  postQueue,
  setPostQueue,
  currentMusic,
  setCurrentMusic,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (currentMusic?.url) {
      audioRef.current = new Audio(currentMusic.url);

      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Playback error:", err);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentMusic, isPlaying]);

  useEffect(() => {
    setIsPlaying(true);
  }, [currentMusic]);

  const handlePrev = () => {
    if (!preQueue || preQueue.length === 0) return;

    const lastSong = preQueue[preQueue.length - 1];
    setCurrentMusic(lastSong);
    setPreQueue(preQueue.slice(0, preQueue.length - 1));
    setPostQueue([currentMusic, ...postQueue]);
  };

  const handleNext = () => {
    if (!postQueue || postQueue.length === 0) return;

    const nextSong = postQueue[0];
    setCurrentMusic(nextSong);
    setPostQueue(postQueue.slice(1));
    setPreQueue([...preQueue, currentMusic]);
  };

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
    <div className="flex justify-between border-t-[1px] border-gray-800 items-center h-16 w-full bottom-0 fixed bg-gray-900">
      <div className="xl:w-[30vw] gap-3 flex items-center">
        <img
          src={currentMusic.image}
          alt="music"
          className="ml-1 rounded-lg p-1 w-16 h-16"
        />
        <div>
          <p className="sm:text-lg text-xs opacity-90">{
            currentMusic.song_name.length>30?currentMusic.song_name.slice(0,28)+"...":currentMusic.song_name
            }</p>
          <p className="text-xs opacity-60">{currentMusic.artist}</p>
        </div>
      </div>
      <div className="text-xl w-cover xl:w-[40vw] gap-6 xl:gap-12 flex justify-center h-full items-center relative mx-2 md:mx-4">
        <div className="group">
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110 hover:opacity-90 transition duration-200"
            onClick={handlePrev}
            icon={faAnglesLeft}
          />
          <div className="hidden xl:block">
            <div className="hidden group-hover:flex justify-center items-end flex-col group-hover:opacity-70 absolute bottom-0 -left-32 text-sm h-full transition duration-500 ease-in-out w-64">
              {preQueue && preQueue.length > 0 ? (
                <>
                  <div className="select-none">
                    {preQueue[preQueue.length - 1].song_name.length > 20
                      ? preQueue[preQueue.length - 1].song_name.slice(0, 18) +
                        "..."
                      : preQueue[preQueue.length - 1].song_name}
                  </div>
                  <div className="select-none opacity-70">
                    {preQueue[preQueue.length - 1].artist}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
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
        <div className="group">
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110 hover:opacity-90 transition duration-200"
            onClick={handleNext}
            icon={faAnglesRight}
          />
          <div className="hidden xl:block">
            <div className="hidden group-hover:flex justify-center flex-col group-hover:opacity-70 absolute bottom-0 -right-32 text-sm h-full transition duration-500 ease-in-out w-64">
              {postQueue && postQueue.length > 0 ? (
                <>
                  <div className="select-none">
                    {postQueue[0].song_name.length > 20
                      ? postQueue[0].song_name.slice(0, 18) + "..."
                      : postQueue[0].song_name}
                  </div>
                  <div className="select-none opacity-70">
                    {postQueue[0].artist}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex xl:w-[30vw] justify-center items-center">Features</div>
    </div>
  );
};

export default Player;
