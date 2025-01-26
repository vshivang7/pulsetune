import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DropMenuItems from './DropMenuItems'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const DropDown = ({user, musicInfo, setUser}) => {
  return (
    <>
    <Menu as="div" className="relative gap-x-3 w-fit inline-block text-left">
      <div>
        <MenuButton className="inline-flex  justify-center gap-x-1.5 rounded-md bg-gray-900 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-black">
          <FontAwesomeIcon className='opacity-80 my-auto text-red-500' icon={faPlus}/>
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="max-h-40 min-w-36 overflow-y-auto absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {
            (user?.playlists?.length>0)?user.playlists.map((playlist) => {
              return (
                <div key = {playlist._id}><DropMenuItems name = {playlist.name} id = {playlist._id} musicInfo = {musicInfo} setUser={setUser}/></div>
              )
            }):<></>
          }
        </div>
        <div>
        <MenuItem>
            <Link
              to="/playlist/new"
              className="text-center block px-4 w-full py-2 text-sm text-gray-200  data-[focus]:bg-gray-600 data-[focus]:outline-none"
            >
              + Create Playlist
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
    </>
  )
}

export default DropDown