import Image from 'next/image';
import React, {FC} from 'react'
import { deposit_icon, withdrawal_icon } from '../assets/icons';

interface TransactionListCardProps {
    name: string;
    status: string;
    product_name: string;
    type: string;
    amount: number | any;
    date: string;

}

const TransactionListCard:FC<TransactionListCardProps> = ({name, product_name, status, type, amount, date }) => {
  return (
    <div className='w-full flex flex-row items-center justify-between'>
        <div className='flex flex-row space-x-[0.91rem] items-center'>
            <Image src={type.toLowerCase() !== "deposit" ? withdrawal_icon : deposit_icon} width={48} height={48}  alt="trxCard-icon" />
            <div className='flex flex-col space-y-[0.56rem]'>
                <p className={`font-medium tracking-[-0.0125rem] text-base text-black300`}>{type.toLowerCase() !== "deposit" ? "Cash withdrawal" : product_name || "N/A"}</p>
                <small className={`${status.toLowerCase() === "pending" && "text-yellow400" } ${status.toLowerCase() === "successful" && "text-gren400" } text-gray400 text-sm font-medium tracking-[-0.0125rem]`}>{type.toLowerCase() !== "deposit" ? <span className='first-letter:capitalize first-letter:text-7xl'>{status}</span> : name}</small>
            </div>
        </div>
        <div className='text-end space-y-1'>
            <p className='text-base text-black300 font-bold tracking-[-0.0125rem]'>{amount}</p>
            <small className='text-sm font-medium tracking-[-0.0125rem] text-gray-400'>{date}</small>
        </div>
    </div>
  )
}

export default TransactionListCard