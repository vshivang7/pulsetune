import { MenuItem } from '@headlessui/react'
import React from 'react'

const DropMenuItems = ({name, id}) => {
  return (
    <>
    <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              {name}
            </a>
          </MenuItem>
    </>
  )
}

export default DropMenuItems