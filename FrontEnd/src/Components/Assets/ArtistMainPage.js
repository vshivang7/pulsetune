import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const artistIds = [
  '4YRxDV8wJFPHPTeXepOstw', // Arijit Singh
  '2FKWNmZWDBZR4dE5KX4plR', // Shreya Ghoshal
  '5f4QpKfy7ptCHwTqspnSJI', // Neha Kakkar
  '3fQKjvG6tx1lkr6zj08p9A', // Pritam
  '1wRPtKGflJrBx9BmLsSwlU', // Vishal-Shekhar
  '2fMqTqiTxUDlmcOEPaQSsx', // Badshah
  '6LEG9Ld1aLImEFEVHdWNSB', // Jubin Nautiyal
  '6oM5eZHhXlSRvZOrv1Gg1d', // Amit Trivedi
  '0oOet2f43PA68X5RxKobEy', // KK
  '0y59o4v8teHpNbEXdICOtZ', // Sonu Nigam
];

const ArtistMainPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const promises = artistIds.map(id =>
          fetch(`https://v1.nocodeapi.com/vshivang/spotify/dTkOvSBZSnjjGDpb/artists?id=${id}`)
            .then(res => res.json())
        );
        const results = await Promise.all(promises);
        // Filter only valid artist objects
        const validArtists = results.filter(artist => artist && artist.id && artist.images);
        setArtists(validArtists);
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
        {artists.map((artist) => (
          <div key={artist.id} className="bg-gray-900 rounded-xl shadow-lg p-5 flex flex-col items-center">
            <img
              src={artist.images[0] ? artist.images[0].url : ''}
              alt={artist.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gray-700"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{artist.name}</h3>
            <p className="text-gray-400 text-center mb-4">Popularity: {artist.popularity}</p>
            <Link
              to={`/artists/${artist.id}`}
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