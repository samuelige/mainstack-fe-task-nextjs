import Image from 'next/image';
import React, {FC} from 'react'
import { info_icon } from '../assets/icons';
import TitleSm from './TitleSm';

interface CategoryListPorps {
    title: string;
    amount: number | string | any;
}


const CategoryList:FC<CategoryListPorps> = ({title, amount}) => {
  return (
    <li className='flex flex-row items-start justify-between'>
        <div>
            <TitleSm>{title}</TitleSm>
            <h1 className='mt-2 text-[1.75rem] text-black300 font-bold leading-[2.375rem] tracking-[-0.09375rem]'>{amount}</h1>
        </div>
        <Image src={info_icon} width={20} height={20}  alt="sideNav-icon" className='grayscale group-hover:grayscale-0'/>
    </li>
  )
}

export default CategoryList