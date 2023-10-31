import { menu_icon } from '@/_shared/assets/icons'
import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <li className='py-1 pl-[0.31rem] pr-3 cursor-pointer space-x-2 bg-gray50 rounded-[6.25rem] flex flex-row'>
        <div className='w-8 h-8 text-center text-white bg-black300 rounded-full flex flex-col justify-center'>OL</div>
        <Image src={menu_icon} width={20} height={20}  alt="menu_icon"/>
    </li>
  )
}

export default Menu