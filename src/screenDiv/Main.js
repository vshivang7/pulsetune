//Main.js
import React, { useState } from 'react'
import Navbar from '../Components/MainBody/Navbar'
import {Routes, Route} from "react-router-dom"
import LoginForm from '../Components/Assets/LoginForm'
import SignUp from '../Components/Assets/SignUp'
import Home from '../Components/MainBody/Home'
import ErrorPage from '../Components/Assets/ErrorPage'

const Main = () => {

  const [searchKey, setSearchKey] = useState("");

  const [songs, setSongs] = useState([]);
  
  return (
    <div className='w-4/5'>
    <div className='m-1 rounded-xl'>
      <Navbar songs={songs} setSongs={setSongs} searchKey={searchKey} setSearchKey={setSearchKey}/>
    </div>
    <div>
      <Routes>
      <Route path='/' element={<Home songs={songs} searchKey={searchKey}/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Main
// //Main.js
// import React, { useState } from 'react'
// import Navbar from '../Components/MainBody/Navbar'
// import {Routes, Route} from "react-router-dom"
// import LoginForm from '../Components/Assets/LoginForm'
// import SignUp from '../Components/Assets/SignUp'
// import Home from '../Components/MainBody/Home'
// import ErrorPage from '../Components/Assets/ErrorPage'

// const Main = () => {

//   const [searchKey, setSearchKey] = useState("");

//   const [artists, setArtists] = useState([]);
//   return (
//     <div className='w-4/5'>
//     <div className='m-1 rounded-xl'>
//       <Navbar artists={artists} setArtists={setArtists} searchKey={searchKey} setSearchKey={setSearchKey}/>
//     </div>
//     <div>
//       <Routes>
//       <Route path='/' element={<Home artists={artists} searchKey={searchKey}/>}/>
//         <Route path='/login' element={<LoginForm/>}/>
//         <Route path='/signup' element={<SignUp/>}/>
//         <Route path='*' element={<ErrorPage/>}/>
//       </Routes>
//     </div>
//     </div>
//   )
// }

// export default Main