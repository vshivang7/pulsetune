import { MenuItem } from '@headlessui/react';
import React, { useState } from 'react';

const DropMenuItems = ({ currentMusic, postQueue, preQueue, currentPlaylist, setPostQueue, name, id, musicInfo, setUser }) => {
  const [loading, setLoading] = useState(false);

  const handleButton = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/playlist/${id}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(musicInfo),
      });

      if (!response.ok) {
        // Optionally handle errors or show a toast
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (id === currentPlaylist) {
        const isInQueue =
          postQueue.some(item => item._id === musicInfo._id) ||
          preQueue.some(item => item._id === musicInfo._id) ||
          currentMusic?._id === musicInfo._id;

        if (!isInQueue) {
          setPostQueue(prev => [...prev, musicInfo]);
        }
      }

      setUser(data);
    } catch (error) {
      // Handle fetch/network errors here if needed
      console.error('Error adding to playlist:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MenuItem>
      <button
        onClick={handleButton}
        disabled={loading}
        className={`block px-4 w-full py-2 text-sm text-gray-200 data-[focus]:bg-gray-600 data-[focus]:outline-none ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </button>
    </MenuItem>
  );
};

export default DropMenuItems;
