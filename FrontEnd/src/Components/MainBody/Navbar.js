import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = ({user, setUser, search, setSearch, setMusics, musics}) => {

    const fetchData = async () => {
      if(user){
      let response = await fetch(`https://v1.nocodeapi.com/vshivang/spotify/dTkOvSBZSnjjGDpb/search?q=${search}&type=track`)
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
        <FontAwesomeIcon className='text-pink-500' icon={faSoundcloud} size='3x' />
            <div className='text-3xl h-full text-pink-500 font-sans '>PulseTune</div>
        </div>
        <div className='w-1/5'>
            <a href='/' className='m-5'>MUSIC</a>
            <a href='/' className='m-5'>PODCASTS</a>
            <a href='/' className='m-5'>LIVE</a>
        </div>
        <div className='w-2/5 flex justify-end'>
                <input name='search' placeholder='Search Here...' onChange={(event) => setSearch(event.target.value)} type='text' className='mr-1 h-10 w-[40vh] rounded-tl-xl rounded-bl-xl p-5 text-white bg-gray-800'></input>
                <button className='h-10 w-[14vh] rounded-tr-xl rounded-br-xl bg-purple-500 text-black' onClick={fetchData}>Search</button>
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