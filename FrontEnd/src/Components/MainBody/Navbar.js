//Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PulseTuneLogo from '../MainBody/PulseTune_Logo.png';

const Navbar = ({searchKey, setSearchKey, setArtists, setSongs}) => {
    const CLIENT_ID = "5f37a18dfc1c4c5faf9825c80583dcb3";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    
     // Initialize as empty array
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find(elem => elem.startsWith("access_token"))
                .split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }
        setToken(token);
    }, []);

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    const searchSpotify = async (e) => {
        e.preventDefault();
        if (!searchKey) return;  // Prevent empty search

        try {
            const { data } = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: searchKey,
                    type: "artist,track"
                }
            });
            // console.log("Fetched songs:", data.tracks.items);  // Log fetched data
            console.log(data);
            setSongs(data.tracks.items);
            setArtists(data.artists.items);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    return (
        <div className="h-16 flex items-center justify-between px-8 bg-gray-900 text-white shadow-lg">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4 ">
                <Link to="/" className="flex items-center space-x-1">
                    <img src={PulseTuneLogo} alt="PulseTune Logo" className=" h-12 w-12 rounded-2xl" />
                    <span className=" text-3xl font-bold text-orange-500 font-serif">PulseTune</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-8 font-medium">
                <Link to="/" className="text-amber-500 hover:text-amber-300 transition duration-200">MUSIC</Link>
                <Link to="/" className="text-amber-500 hover:text-amber-300 transition duration-200">PODCASTS</Link>
                <Link to="/" className="text-amber-500 hover:text-amber-300 transition duration-200">LIVE</Link>
            </nav>

            {/* Search Bar and Authentication Links */}
            <div className="flex items-center space-x-4 w-1/2">
                {!token ? (
                    <a
                        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                        className="text-blue-500 hover:text-blue-400 transition duration-200"
                    >
                        Login to Spotify
                    </a>
                ) : (
                    <form onSubmit={searchSpotify} className="flex items-center space-x-2 w-full">
                        <input
                            onChange={e => setSearchKey(e.target.value)}
                            name="search"
                            placeholder="Search Here..."
                            type="text"
                            className="w-4/6 h-10 px-4 rounded-l-3xl bg-slate-600 text-white placeholder-gray-400 shadow focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="h-10 px-4 bg-gray-600 text-white rounded-r-3xl hover:bg-blue-600 transition duration-200"
                        >
                            Search
                        </button>
                    </form>
                )}
                {token && (
                    <button onClick={logout} className="text-red-500 hover:text-red-400 transition duration-200">
                        Logout
                    </button>
                )}
            </div>

            {/* Signup and Login Links */}
            <div className="flex items-center space-x-4">
                <Link to="/signup" className="hover:text-gray-300 transition duration-200">Sign Up</Link>
                <Link to="/login" className="hover:text-gray-300 transition duration-200">Login</Link>
            </div>
        </div>

    );
};

export default Navbar;
// </div>
    //     <div className="h-16 flex items-center justify-between px-4 bg-gray-900 text-white">
    // {/* Logo and Title */}
    // <div className="flex items-center space-x-2 w-1/5 justify-center">
    //     <Link to="/">
    //         <img src={PulseTuneLogo} alt="PulseTune Logo" className="h-12 rounded-2xl" />
    //     </Link>
    //     <Link to="/" className="text-3xl text-red-500 font-serif">PulseTune</Link>
    // </div>

    // {/* Navigation Links */}
    // <div className="flex space-x-8 text-amber-500 font-bold">
    //     <Link to="/" className="hover:text-amber-300">MUSIC</Link>
    //     <Link to="/" className="hover:text-amber-300">PODCASTS</Link>
    //     <Link to="/" className="hover:text-amber-300">LIVE</Link>
    // </div>

    // {/* Search and Authentication */}
    // <div className="flex items-center space-x-4 w-1/2">
    //     {!token ? (
    //         <a
    //             href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
    //             className="text-blue-500 hover:text-blue-400"
    //         >
    //             Login to Spotify
    //         </a>
    //     ) : (
    //         <form onSubmit={searchSpotify} className="flex items-center">
    //             <input
    //                 onChange={e => setSearchKey(e.target.value)}
    //                 name="search"
    //                 placeholder="Search Here..."
    //                 type="text"
    //                 className="text-black shadow-lg h-10 w-64 rounded-tl-xl rounded-bl-xl p-2 placeholder-gray-500"
    //             />
    //             <button
    //                 type="submit"
    //                 className="text-white bg-blue-800 h-10 w-20 rounded-tr-xl rounded-br-xl hover:bg-blue-700"
    //             >
    //                 Search
    //             </button>
    //         </form>
    //     )}
    //     <button onClick={logout} className="text-red-500 hover:text-red-400">Logout</button>
    // </div>

    // {/* Signup and Login Links */}
    // <div className="w-1/3 flex items-center justify-end space-x-4">
    //     <Link to="/signup" className="hover:text-gray-300">SignUp</Link>
    //     <Link to="/login" className="hover:text-gray-300">Login</Link>
    // </div>



// <div className="h-16  flex items-center justify-between">
//     <div className='flex w-1/5 justify-center h-[6vh]'>
//     <Link to="/"><img src={PulseTuneLogo} alt="PulseTune Logo" className='h-12 rounded-2xl m-1' /></Link>
//     <div className='text-3xl h-full text-red-500 p-2 font-serif'><Link to="/">PulseTune</Link></div>
// </div>
//     <div className='text-amber-700 font-bold'>
//         <Link to="/" className="m-5">MUSIC</Link>
//         <Link to="/" className="m-5">PODCASTS</Link>
//         <Link to="/" className="m-5">LIVE</Link>
//     </div>
//     <div className="w-1/2 ml-10">
//         {!token ? (
//             <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//                 Login to Spotify
//             </a>
//         ) : (
//             <div className='flex'>
//                 <form onSubmit={searchSpotify}>
//                     <input
//                         onChange={e => setSearchKey(e.target.value)}
//                         name="search"
//                         placeholder="Search Here..."

//                         type="text"
//                         className="text-black shadow-lg mr-1 h-[5vh] w-[40vh] rounded-tl-xl rounded-bl-xl p-2"
//                     />
//                     <button
//                         type="submit"
//                         className="text-white bg-blue-800 button h-[5vh] w-[10vh] rounded-tr-xl rounded-br-xl">
//                         Search
//                     </button>
//                 </form>
//                 {/* Passing artists to Home */}
//                 <button onClick={logout}>Logout</button>
//             </div>
//         )}
//     </div>
//     <div className="w-1/3 flex justify-end">
//         <Link to="/signup" className="m-3">SignUp</Link>
//         <Link to="/login" className="m-3">Login</Link>
//     </div>
// </div>