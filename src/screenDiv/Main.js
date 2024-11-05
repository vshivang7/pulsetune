import React from 'react'
import Navbar from '../Components/MainBody/Navbar'
import {Routes, Route} from "react-router-dom"
import LoginForm from '../Components/Assets/LoginForm'
import SignUp from '../Components/Assets/SignUp'
import Home from '../Components/MainBody/Home'
import ErrorPage from '../Components/Assets/ErrorPage'

const Main = () => {
  return (
    <div className='w-4/5'>
    <div className='m-1 rounded-xl'>
      <Navbar/>
    </div>
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Main