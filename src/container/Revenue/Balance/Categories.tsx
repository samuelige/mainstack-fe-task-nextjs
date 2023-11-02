import CategoryList from '@/_shared/components/CategoryList'
import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-col space-y-8'>
        <CategoryList
            title={"Ledger Balance"}
            amount={"USD 0.00"}
        />
        <CategoryList
            title={"Total Payout"}
            amount={"USD 0.00"}
        />
        <CategoryList
            title={"Total Revenue"}
            amount={"USD 0.00"}
        />
        <CategoryList
            title={"Pending Payout"}
            amount={"USD 0.00"}
        />
    </div>
  )
}

export default Categories