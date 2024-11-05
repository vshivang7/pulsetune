import React from 'react'
import PulseTuneLogo from '../Components/PulseTune_Logo.png';


const Sidebar = () => {
  return (
    <div className='bg-blue-300 h-screen w-1/5 m-1'>
        <div className='flex'>
        <img src={PulseTuneLogo} alt="PulseTune Logo" className='h-16' />
            <div className=''>
                PulseTune
                </div>
        </div>
    </div>
  )
}

export default Sidebar