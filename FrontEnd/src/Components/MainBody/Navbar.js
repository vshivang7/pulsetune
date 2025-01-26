import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRightFromBracket, faSearch} from '@fortawesome/free-solid-svg-icons';
const Navbar = ({user, setUser, search, setSearch, setMusics, musics}) => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/');
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
        <Link to='/' className='flex text-red-500 justify-center items-center w-1/5 h-[6vh]'>
        <FontAwesomeIcon className='' icon={faSoundcloud} size='3x' />
            <div className='text-4xl caveat-logo '>PulseTune</div>
        </Link>
        <div className='w-1/5'>
            <a href='/' className='m-5'>MUSIC</a>
            <a href='/' className='m-5'>PODCASTS</a>
            <a href='/' className='m-5'>LIVE</a>
        </div>
        {
            user!=null?

        <div className="h-10 w-[35vw] ml-5 flex items-center justify-center rounded-md gap-2 px-3 bg-gray-800 hover:bg-gray-700 focus-within:w-[50vw] border-[1px] border-gray-700 transition-all duration-500">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-lg" />
            <input
              name="search"
              placeholder="Search songs, artists..."
              onClick={handleClick}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              type="text"
              className="h-full w-full text-gray-200 bg-inherit placeholder-gray-400 focus:outline-none"
              autoComplete="off"/>
        </div>
            :
            <div className='w-1/5'></div>
        }


        <div className='w-2/5 flex justify-end'>
            {
                user!=null?
                <>
                <a href='/' className='m-3 my-auto'>Hey! {user.username.toString().toUpperCase()}</a>
                <button onClick={handleLogOut} className='text-red-200 m-3 mr-5 my-auto'><FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
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