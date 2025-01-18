import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import LoginForm from '../Components/Assets/LoginForm'
import SignUp from '../Components/Assets/SignUp'
import Home from '../Components/MainBody/Home'
import ErrorPage from '../Components/Assets/ErrorPage'
import PlaylistForm from '../Components/Assets/PlaylistForm'
import ArtistRunner from '../Components/MainBody/ArtistDiv'
import PlaylistPage from './PlaylistPage'

const Main = ({user, setUser, musics}) => {
  return (
    
    <div className='w-4/5 ml-auto'>
    <div>
      <Routes>
       {
          user?<>
          <Route path='/' element={<Home musics = {musics} user = {user}/>}/>
          <Route path='/artists' element={<ArtistRunner user = {user}/>}/>
          <Route path='/playlist' element={<PlaylistPage user={user}/>}/>
          <Route path='/playlist/new' element={<PlaylistForm user = {user} setUser = {setUser}/>}/>
          <Route path='/login' element={<Navigate to="/" />}/>
          <Route path='/signup' element={<Navigate to="/" />}/>
          </>:<>
          <Route path='/' element={<Navigate to="/login" />}/>
          <Route path='/playlist' element={<Navigate to="/login" />}/>
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