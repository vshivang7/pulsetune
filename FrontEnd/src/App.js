import Sidebar from "./screenDiv/Sidebar.js";
import Main from "./screenDiv/Main.js";
import { useEffect, useState } from "react";
import Navbar from "./Components/MainBody/Navbar.js";
import Player from "./screenDiv/Player.js";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [musics, setMusics] = useState([]);
  const [currentMusic, setCurrentMusic] = useState(null);

  useEffect(() => {
    setCurrentMusic(null)
  }, [user]);

  useEffect(() => {
    const handlefetch = async () => {
      try {
        let res = await fetch("http://localhost:8080/userExist", {
          method: 'GET',
          credentials: 'include',
        });
  
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
  
        let data = await res.json();
        if (data) setUser(data);
      } catch (error) {
      }
    };
    handlefetch();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      
      if(user){
        let response = await fetch(`http://localhost:8080/fetchData`)
        let data = await response.json();
        setMusics([...data]);
        }
    }
    fetchData();
  }, [user])

  return (
    <div className="bg-black font-light text-white overflow-y-auto max-h-[100vh] scrollbar-hide">
      <div className=' w-full mb-4 fixed bg-gray-950 border-b-[1px] border-gray-800 top-0 left-0 z-10'>
        <Navbar user = {user} setUser = {setUser} search = {search} setSearch = {setSearch} setMusics = {setMusics} musics={musics}/>
      </div>
      <div className="flex mt-16">
          <div className="w-[16vw] fixed">
        <Sidebar user={user} setMusics={setMusics}/>
          </div>
          <div className="w-[84vw] ml-auto">
        <Main setCurrentMusic={setCurrentMusic} search = {search} user = {user} setUser = {setUser} musics={musics}/> 
          </div>
      </div>
      {currentMusic==null||user==null?<></>:
      <div>
          <Player currentMusic={currentMusic} />
      </div>
      }
    </div>
  );
}
export default App;


//samit lodddddeeee dekh bhadwe