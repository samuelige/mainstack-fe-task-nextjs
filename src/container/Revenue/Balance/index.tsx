import React from 'react'
import AvailableBalance from './AvailableBalance'
import DataChart from './DataChart'
import Categories from './Categories'

const BalanceContainer = () => {
  return (
    <div className='flex col lg:space-x-[7.74rem] lg:flex-row items-start justify-between'>
      <div className='flex flex-col'>
        <AvailableBalance/>
        <DataChart/>
      </div>
      <div className='flex flex-col w-[16.9375rem]'>
        <Categories/>
      </div>
    </div>
  )
}

export default BalanceContainer