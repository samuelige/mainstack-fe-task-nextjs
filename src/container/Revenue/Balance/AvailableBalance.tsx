import TitleSm from '@/_shared/components/TitleSm'
import React, {FC} from 'react'

const AvailableBalance:FC<{balance: any}> = ({balance}) => {
  return (
    <div className='flex flex-row justify-between space-x-16 items-center'>
        <div>
           <TitleSm>Available Balance</TitleSm> 
           <h1 className='mt-2 text-4xl text-black300 font-bold leading-[3rem] tracking-[-0.09375rem]'>{balance}</h1>
        </div>
        <button className='rounded-[6.25rem] bg-black300 text-white p-3 md:py-3.5 md:px-7 tracking-[-0.025rem] md:w-[10.4375rem] ' type="button">Withdraw</button>
    </div>
  )
}

export default AvailableBalance