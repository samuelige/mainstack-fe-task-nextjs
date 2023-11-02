import { dayandmonth } from '@/_lib/utils/dayandmonth'
import { toCurrency } from '@/_lib/utils/toCurrency'
import TransactionListCard from '@/_shared/components/TransactionListCard'
import React, {FC} from 'react'

// Record<string, string | string | Record<string, string|number>>[]}>
const TransactionLists:FC<{data:any[]}>  = ({data}) => {
  return (
    
    <div className='flex flex-col gap-[1.5rem]'>
        {
            data?.map((item, index) => (
                <TransactionListCard
                    key={index}
                    name={item?.metadata?.name}
                    status={item?.status}
                    product_name={item?.metadata?.product_name}
                    type={item?.type}
                    amount={toCurrency(item?.amount, "USD") }
                    date={dayandmonth(item?.date)}
                />
            ))
        }
    </div>
  )
}

export default TransactionLists