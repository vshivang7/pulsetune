import Sidebar from "./screenDiv/Sidebar.js";
import Main from "./screenDiv/Main.js";
import Navbar from "./Components/MainBody/Navbar.js";
import { useState } from "react";

function App() {
  const [searchKey, setSearchKey] = useState("");

  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  return (
    <div className=" bg-black text-white font-family: 'Roboto', sans-serif">
      <div className='h-fit fixed w-full bg-black'>
          <Navbar searchKey={searchKey} setSearchKey={setSearchKey} setArtists={setArtists} setSongs={setSongs} />
      </div>
      <div className="flex pt-14">
          <Sidebar className="w-1/6"/>
          <Main className="" artists = {artists} songs = {songs}/>
      </div>
    </div>
  );
}
export default App;