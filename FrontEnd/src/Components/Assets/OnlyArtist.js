import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OnlyArtist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(
        //   `https://v1.nocodeapi.com/vshivang/spotify/dTkOvSBZSnjjGDpb/artists?id=${id}`
        );
        const data = await response.json();
        // If the API returns a single artist object
        if (data && data.id) {
          setArtist(data);
        } else if (data.artists && Array.isArray(data.artists) && data.artists.length > 0) {
          setArtist(data.artists[0]);
        }
      } catch (error) {
        console.error('Failed to fetch artist:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtist();
  }, [id]);

  if (loading) {
    return <div className="text-white p-8">Loading...</div>;
  }

  if (!artist) {
    return <div className="text-white p-8">Artist not found.</div>;
  }

  return (
    <div className="p-8 flex flex-col items-center">
      <img
        src={artist.images && artist.images[0] ? artist.images[0].url : ''}
        alt={artist.name}
        className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-gray-700"
      />
      <h2 className="text-4xl font-bold text-white mb-2">{artist.name}</h2>
      <p className="text-gray-400 mb-4">Popularity: {artist.popularity}</p>
      <p className="text-gray-400 mb-4">Followers: {artist.followers ? artist.followers.total : 'N/A'}</p>
      <a
        href={artist.external_urls ? artist.external_urls.spotify : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        View on Spotify
      </a>
    </div>
  );
};

export default OnlyArtist;