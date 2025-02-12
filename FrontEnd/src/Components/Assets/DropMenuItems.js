import { MenuItem } from '@headlessui/react'
import React from 'react'

const DropMenuItems = ({currentMusic, postQueue, preQueue, currentPlaylist, setPostQueue, name, id, musicInfo, setUser}) => {
  const handleButton = async () => {
    let response = await fetch(`http://localhost:8080/playlist/${id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicInfo)
    })
    let data = await response.json();
    console.log(id === currentPlaylist)
    if(id === currentPlaylist){
      const isInQueue = postQueue.some(item => item._id === musicInfo._id) || 
                  preQueue.some(item => item._id === musicInfo._id) || 
                  currentMusic?._id === musicInfo._id;
      if(!isInQueue){
        setPostQueue(prev => [...prev, musicInfo]);
      }
    }
    setUser(data)
    // console.log(data)
  }
  return (
    <>
    <MenuItem>
            <button
              onClick={handleButton}
              className="block px-4 w-full py-2 text-sm text-gray-200 data-[focus]:bg-gray-600 data-[focus]:outline-none"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          </MenuItem>
    </>
  )
}

export default DropMenuItems