//Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            setSongs(data.tracks.items);
            setArtists(data.artists.items);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    return (
        <div className="h-16 flex items-center rounded-tl-xl rounded-tr-xl">
            <div>
                <Link to="/" className="m-5">MUSIC</Link>
                <Link to="/" className="m-5">PODCASTS</Link>
                <Link to="/" className="m-5">LIVE</Link>
            </div>
            <div className="w-1/2 ml-10">
                {!token ? (
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                        Login to Spotify
                    </a>
                ) : (
                    <div>
                        <form onSubmit={searchSpotify}>
                            <input
                                onChange={e => setSearchKey(e.target.value)}
                                name="search"
                                placeholder="Search Here..."
                                type="text"
                                className="shadow-lg mr-1 h-[5vh] w-[40vh] rounded-tl-xl rounded-bl-xl p-2"
                            />
                            <button
                                type="submit"
                                className="text-white bg-blue-800 button h-[5vh] w-[10vh] rounded-tr-xl rounded-br-xl">
                                Search
                            </button>
                        </form>
                        {/* Passing artists to Home */}
                        <button onClick={logout}>Logout</button>
                    </div>
                )}
            </div>
            <div className="w-1/3 flex justify-end">
                <Link to="/signup" className="m-3">SignUp</Link>
                <Link to="/login" className="m-3">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
// //Navbar.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = ({searchKey, setSearchKey, artists, setArtists}) => {
//     const CLIENT_ID = "5f37a18dfc1c4c5faf9825c80583dcb3";
//     const REDIRECT_URI = "http://localhost:3000";
//     const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//     const RESPONSE_TYPE = "token";
    
//      // Initialize as empty array
//     const [token, setToken] = useState("");

//     useEffect(() => {
//         const hash = window.location.hash;
//         let token = window.localStorage.getItem("token");

//         if (!token && hash) {
//             token = hash
//                 .substring(1)
//                 .split("&")
//                 .find(elem => elem.startsWith("access_token"))
//                 .split("=")[1];

//             window.location.hash = "";
//             window.localStorage.setItem("token", token);
//         }
//         setToken(token);
//     }, []);

//     const logout = () => {
//         setToken("");
//         window.localStorage.removeItem("token");
//     };

//     const searchArtists = async (e) => {
//         e.preventDefault();
//         if (!searchKey) return;  // Prevent empty search

//         try {
//             const { data } = await axios.get("https://api.spotify.com/v1/search", {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 },
//                 params: {
//                     q: searchKey,
//                     type: "artist"
//                 }
//             });
//             console.log("Fetched artists:", data.artists.items);  // Log fetched data
//             setArtists(data.artists.items);
//         } catch (error) {
//             console.error("Error fetching artists:", error);
//         }
//     };

//     return (
//         <div className="h-16 flex items-center rounded-tl-xl rounded-tr-xl">
//             <div>
//                 <Link to="/" className="m-5">MUSIC</Link>
//                 <Link to="/" className="m-5">PODCASTS</Link>
//                 <Link to="/" className="m-5">LIVE</Link>
//             </div>
//             <div className="w-1/2 ml-10">
//                 {!token ? (
//                     <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//                         Login to Spotify
//                     </a>
//                 ) : (
//                     <div>
//                         <form onSubmit={searchArtists}>
//                             <input
//                                 onChange={e => setSearchKey(e.target.value)}
//                                 name="search"
//                                 placeholder="Search Here..."
//                                 type="text"
//                                 className="shadow-lg mr-1 h-[5vh] w-[40vh] rounded-tl-xl rounded-bl-xl p-2"
//                             />
//                             <button
//                                 type="submit"
//                                 className="text-white bg-blue-800 button h-[5vh] w-[10vh] rounded-tr-xl rounded-br-xl">
//                                 Search
//                             </button>
//                         </form>
//                         {/* Passing artists to Home */}
//                         <button onClick={logout}>Logout</button>
//                     </div>
//                 )}
//             </div>
//             <div className="w-1/3 flex justify-end">
//                 <Link to="/signup" className="m-3">SignUp</Link>
//                 <Link to="/login" className="m-3">Login</Link>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
