import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PlaylistCard = ({ playlist, setUser }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/playlist/${playlist._id}`, {
        withCredentials: true,
      });
      setUser(response.data.user);
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="opacity-90 flex flex-col justify-evenly w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-5">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={`${playlist.name} playlist`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {playlist.name.charAt(0).toUpperCase() + playlist.name.slice(1)}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Songs: {playlist.list.length}
        </span>
        <div className="flex mt-4 md:mt-6 space-x-2">
          <Link
            to={`/playlist/${playlist._id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Playlist
          </Link>
          <button
            onClick={handleDelete}
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
