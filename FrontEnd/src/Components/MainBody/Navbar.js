import React from 'react'
import PulseTuneLogo from '../PulseTune_Logo.png';
import { Link } from 'react-router-dom';
const Navbar = ({user, setUser, search, setSearch, setMusics, musics}) => {

    const fetchData = async () => {
      if(user){
      let response = await fetch(`https://v1.nocodeapi.com/samitsonkar0/spotify/PibIJtXsmIflxVDE/search?q=${search}&type=track`)
      let data = await response.json();
      setMusics([...data.tracks.items]);
      console.log(data.tracks.items)
      }
    }
    
    const handleLogOut = async () => {
      let response = await fetch('http://localhost:8080/logout', {
        method: 'GET',
        credentials: 'include',
      })
      if(response.ok) setUser(null);
    }

  return (
    <div className='h-16 flex items-center rounded-tl-xl rounded-tr-xl'>
        <div className='flex justify-center items-center w-1/5 h-[6vh]'>
            <img src={PulseTuneLogo} alt="PulseTune Logo" className='h-12 rounded-2xl' />
            <div className='text-3xl h-full text-red-500 font-mono p-2 '>PulseTune</div>
        </div>
        <div className='w-1/5'>
            <a href='/' className='m-5'>MUSIC</a>
            <a href='/' className='m-5'>PODCASTS</a>
            <a href='/' className='m-5'>LIVE</a>
        </div>
        <div className='w-2/5 ml-auto'>
                <input name='search' placeholder='Search Here...' value={search} onChange={(event) => setSearch(event.target.value)} type='text' className='mr-1 h-10 w-[40vh] rounded-tl-xl rounded-bl-xl p-5 text-yellow-100 bg-gray-800'></input>
                <button className='h-10 w-[14vh] rounded-tr-xl rounded-br-xl bg-blue-800' onClick={fetchData}>Search</button>
        </div>
        <div className='w-1/5 flex justify-end'>
            {
                user!=null?
                <>
                <a href='/' className='m-3 font-bold'>Hello! {user.username.toString().toUpperCase()}</a>
                <button onClick={handleLogOut} className='m-3'>Logout</button>
                </>
                :
                <>
                <Link to='/signup' className='m-3'>SignUp</Link>
                <Link to='/login' className='m-3'>Login</Link>
                </>
            }
        </div>
    </div>
  )
}

export default Navbar