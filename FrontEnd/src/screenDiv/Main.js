import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import LoginForm from '../Components/Assets/LoginForm'
import SignUp from '../Components/Assets/SignUp'
import Home from '../Components/MainBody/Home'
import ErrorPage from '../Components/Assets/ErrorPage'
import PlaylistForm from '../Components/Assets/PlaylistForm'
import PlaylistPage from './PlaylistPage'
import PlaylistMusicsDisplay from '../Components/Assets/PlaylistMusicsDisplay'

const Main = ({search, user, setUser, musics}) => {
  return (
    
    <div className='w-4/5 ml-auto'>
    <div>
      <Routes>
       {
          user?<>
          <Route path='/' element={<Home search={search} setUser={setUser} musics = {musics} user = {user}/>}/>
          <Route path='/playlist' element={<PlaylistPage user={user} setUser={setUser}/>}/>
          <Route path='/playlist/new' element={<PlaylistForm user = {user} setUser = {setUser}/>}/>
          <Route path='/playlist/:id' element={<PlaylistMusicsDisplay user={user} setUser={setUser}/>}/>
          <Route path='/login' element={<Navigate to="/" />}/>
          <Route path='/signup' element={<Navigate to="/" />}/>
          </>:<>
          <Route path='/' element={<Navigate to="/login" />}/>
          {/* <Route path='/playlist' element={<Navigate to="/login" />}/> */}
          {/* <Route path='/playlist/:id' element={<Navigate to="/login" />}/> */}
          <Route path='/login' element={<LoginForm user = {user} setUser = {setUser}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          </>
        }
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Main