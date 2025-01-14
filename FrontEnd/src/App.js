import Sidebar from "./screenDiv/Sidebar.js";
import Main from "./screenDiv/Main.js";
import { useEffect, useState } from "react";
import Navbar from "./Components/MainBody/Navbar.js";

function App() {
  
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("");
  const [musics, setMusics] = useState([]);

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

  return (
    <div className="bg-black text-white">
    <div className='w-full mb-4 fixed bg-gray-900 top-0 left-0 z-10'>
      <Navbar user = {user} setUser = {setUser} search = {search} setSearch = {setSearch} setMusics = {setMusics} musics={musics}/>
    </div>
    <div className="flex pl-16 pr-16 w-full mt-16">
      <Sidebar user={user} setMusics={setMusics}/>
      <Main user = {user} setUser = {setUser} musics={musics}/>
    </div>
    </div>
  );
}
export default App;