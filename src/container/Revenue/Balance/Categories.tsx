import { toCurrency } from '@/_lib/utils/toCurrency'
import CategoryList from '@/_shared/components/CategoryList'
import React, {FC} from 'react'

interface CategoriesProps {
    balance: number,
    total_payout: number,
    total_revenue: number,
    pending_payout: number,
    ledger_balance: number
}

const Categories:FC<{data:CategoriesProps}> = ({data}) => {
  return (
    <div className='w-full grid  md:grid-cols-2 gap-7 lg:gap-0 lg:flex lg:flex-col lg:space-y-8'>
        <CategoryList
            title={"Ledger Balance"}
            amount={toCurrency(data?.ledger_balance, "USD")}
        />
        <CategoryList
            title={"Total Payout"}
            amount={toCurrency(data?.total_payout, "USD")}
        />
        <CategoryList
            title={"Total Revenue"}
            amount={toCurrency(data?.total_revenue, "USD")}
        />
        <CategoryList
            title={"Pending Payout"}
            amount={toCurrency(data?.pending_payout, "USD")}
        />
    </div>
  )
}

export default Categories