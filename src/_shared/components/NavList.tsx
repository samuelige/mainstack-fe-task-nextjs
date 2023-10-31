import React, {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavListProps } from '@/types'

const NavList:FC<NavListProps> = ({imageSrc, name, isActive}) => {
  return (
    <Link href={""} className={`flex flex-row  font-semibold space-x-1 hover:rounded-[6.25rem] py-2 pl-[0.88rem] pr-[1.12rem] ${isActive ? "bg-black300 hover:bg-black300 rounded-[6.25rem] text-white items-center" : "hover:bg-gray50 items-start"}`}>
        <div><Image src={imageSrc} width={20} height={20}  alt="NavList-icon" className='w-full object-fill'/></div>
        <p className='tracking-tight text-center'>{name}</p>
    </Link>
  )
}

export default NavList