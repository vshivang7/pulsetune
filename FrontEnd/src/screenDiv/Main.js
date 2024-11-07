import React from 'react'
import Navbar from '../Components/MainBody/Navbar'
import {Routes, Route} from "react-router-dom"
import LoginForm from '../Components/Assets/LoginForm'
import SignUp from '../Components/Assets/SignUp'
import Home from '../Components/MainBody/Home'
import ErrorPage from '../Components/Assets/ErrorPage'

const Main = ({isLoggedIn, setIsLoggedIn}) => {

  return (
    <div className='w-4/5'>
    <div className='m-1 rounded-xl'>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
    </div>
    <div>
      <Routes>
        {!isLoggedIn?
        <>
        <Route path='/' element={<LoginForm isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>}/>
        </>
        :
        <>
      <Route path='/' element={<Home/>}/>
        </>}
        <Route path='/login' element={<LoginForm isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Main