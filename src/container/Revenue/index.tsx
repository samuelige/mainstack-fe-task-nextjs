import React from 'react'
import BalanceContainer from './Balance'
import Transactions from './Transactions'

const Revenue = () => {
  return (
    <div className='w-full'>
        <BalanceContainer/>
        <Transactions/>
    </div>
  )
}

export default Revenue