import React, { useEffect, useRef, useState } from "react";
import Card from "../Assets/Card.js";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({
  setCurrentPlaylist,
  currentPlaylist,
  preQueue,
  setPreQueue,
  postQueue,
  setPostQueue,
  currentMusic,
  setCurrentMusic,
  search,
  user,
  setUser,
  musics,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const filtered = musics.filter(
        (music) =>
          music.song_name.toLowerCase().includes(search.toLowerCase()) ||
          music.artist.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMusic(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, musics]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[40vh]">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-3xl text-white mb-3"
        />
        <span className="text-white text-xl">Loading Music...</span>
      </div>
    );
  }

  return (
    <div className="grid gap-3 grid-cols-1 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 w-full mt-5">
      {search ? (
        filteredMusic.length > 0 ? (
          filteredMusic.map((music) => (
            <div className="m-2" key={music._id}>
              <Card
                currentPlaylist={currentPlaylist}
                setCurrentPlaylist={setCurrentPlaylist}
                preQueue={preQueue}
                setPreQueue={setPreQueue}
                postQueue={postQueue}
                setPostQueue={setPostQueue}
                currentMusic={currentMusic}
                setCurrentMusic={setCurrentMusic}
                setUser={setUser}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioRef={audioRef}
                image={music.image}
                song_name={music.song_name}
                artist={music.artist}
                url={music.url}
                user={user}
                id={music._id}
              />
            </div>
          ))
        ) : (
          <div className="h-[calc(100vh-20rem)] w-[calc(100vw-26rem)] mt-5 flex justify-center items-center">
            <h1 className="text-2xl">No Song Found . .</h1>
          </div>
        )
      ) : (
        musics.map((music) => (
          <div className="m-2" key={music._id}>
            <Card
              currentPlaylist={currentPlaylist}
              setCurrentPlaylist={setCurrentPlaylist}
              preQueue={preQueue}
              setPreQueue={setPreQueue}
              postQueue={postQueue}
              setPostQueue={setPostQueue}
              currentMusic={currentMusic}
              setCurrentMusic={setCurrentMusic}
              setUser={setUser}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              image={music.image}
              song_name={music.song_name}
              artist={music.artist}
              url={music.url}
              user={user}
              id={music._id}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
