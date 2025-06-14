import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArtistMainPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch('http://localhost:8080/fetchdata', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        const items = Array.isArray(data.data) ? data.data : [];
        const artistMap = {};

        items.forEach(item => {
          if (item.artist && typeof item.artist === "string") {
            if (!artistMap[item.artist]) {
              artistMap[item.artist] = {
                name: item.artist,
                coverImage: item.image || "",
                songs: [],
              };
            }
            // Store the full song object
            artistMap[item.artist].songs.push({
              _id: item._id,
              image: item.image,
              song_name: item.song_name,
              url: item.url,
              // add any other fields you want to keep
            });
          }
        });

        setArtists(Object.values(artistMap));
        // Save to localStorage for access in OnlyArtist
        localStorage.setItem('allArtists', JSON.stringify(Object.values(artistMap)));
        console.log('Fetched unique artists with cover and songs:', Object.values(artistMap));
      } catch (error) {
        console.error('Failed to fetch artists:', error);
      }
    };
    fetchArtists();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {artists.map((artist, idx) => (
          <div key={artist.name + idx} className="bg-gray-900 rounded-xl shadow-lg p-5 flex flex-col items-center">
            <img
              src={artist.coverImage}
              alt={artist.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gray-700"
              onError={e => { e.target.src = ""; }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">{artist.name}</h3>
            <p className="text-gray-400 text-center mb-2">Songs: {artist.songs.length}</p>
            <Link
              to={`/artists/${encodeURIComponent(artist.name)}`}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
            >
              View Artist
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistMainPage;