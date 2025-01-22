import { MenuItem } from '@headlessui/react'
import React from 'react'

const DropMenuItems = ({name, id, musicInfo, setUser}) => {
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
    setUser(data)
    // console.log(await response.json)
  }
  return (
    <>
    <MenuItem>
            <button
              onClick={handleButton}
              className="block px-4 w-full py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          </MenuItem>
    </>
  )
}

export default DropMenuItems