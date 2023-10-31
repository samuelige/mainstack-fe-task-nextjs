import React from 'react'
import Image from 'next/image'
import { logo } from '@/_shared/assets/images'
import HeaderNav from './HeaderNav'
import { chat_icon, notify_icon } from '@/_shared/assets/icons'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="w-full flex flex-col h-[4rem] justify-center ">
        <div className='pr-3 pl-6 w-full shadow-light100  rounded-[6.25rem] flex flex-col justify-center h-full xl-1:max-w-[88rem] xl-1:m-auto'>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="w-9">
              <Image src={logo} width={0} height={0}  alt="logo-img" className={`w-full object-fill`}/>
            </div>

            <HeaderNav/>

            <ul className='flex flex-row space-x-2'>
              <li className='px-6 py-[0.62rem]'><Image src={notify_icon} width={20} height={20}  alt="notify_icon"/></li>
              <li className='px-6 py-[0.62rem]'><Image src={chat_icon} width={20} height={20}  alt="chat_icon"/></li>
              <Menu/>
            </ul>

          </div>
        </div>
        
    </header>
  )
}

export default Header