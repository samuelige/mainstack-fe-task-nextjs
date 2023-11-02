import TitleSm from '@/_shared/components/TitleSm'
import React from 'react'

const AvailableBalance = () => {
  return (
    <div className='flex flex-row space-x-16 items-center'>
        <div>
           <TitleSm>Available Balance</TitleSm> 
           <h1 className='mt-2 text-4xl text-black300 font-bold leading-[3rem] tracking-[-0.09375rem]'>USD 120,500.00</h1>
        </div>
        <button className='rounded-[6.25rem] bg-black300 text-white py-3.5 px-7 tracking-[-0.025rem] w-[10.4375rem] ' type="button">Withdraw</button>
    </div>
  )
}

export default AvailableBalance