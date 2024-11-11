import { MenuItem } from '@headlessui/react'
import React from 'react'

const DropMenuItems = ({name, id, musicInfo}) => {
  const handleButton = async () => {
    let response = await fetch(`http://localhost:8080/playlist/${name}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicInfo)
    })
    console.log(await response.json)
  }
  return (
    <>
    <MenuItem>
            <button
              onClick={handleButton}
              className="block px-4 w-full py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              {name}
            </button>
          </MenuItem>
    </>
  )
}

export default DropMenuItems