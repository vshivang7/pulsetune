import React from 'react'
const isLoggedIn = true;
const Navbar = () => {
  return (
    <div className='h-16 flex items-center rounded-tl-xl bg-white rounded-tr-xl'>
        <div className='w-1/3'>
            <a href='/' className='m-5'>MUSIC</a>
            <a href='/' className='m-5'>PODCASTS</a>
        </div>
        <div className='w-1/3'>
            <form>
                <input name='search' placeholder='Search Here...' type='text' className='shadow-lg mr-1 h-[5vh] w-[40vh] rounded-tl-xl rounded-bl-xl p-2'></input>
                <button type='submit' className='button h-[5vh] w-[10vh] rounded-tr-xl rounded-br-xl'>Search</button>
            </form>
        </div>
        <div className='w-1/3 flex justify-end'>
            {
                isLoggedIn?
                <>
                <a href='/' className='m-3'>Profile</a>
                <a href='/' className='m-3'>Logout</a>
                </>
                :
                <>
                <a href='/' className='m-3'>SignUp</a>
                <a href='/' className='m-3'>Login</a>
                </>
            }
        </div>
    </div>
  )
}

export default Navbar