"use client"

import React from 'react'
import TransactionHeader from './TransactionHeader'
import TransactionLists from './TransactionLists'
import { useQuery } from 'react-query';
import {fetchAllTransactionsDataAction} from "@/api/revenue.actions"

const Transactions = () => {
    const { data: getTransactionData, isLoading: isLoading_Transactions } = useQuery(['single_movie'],
        fetchAllTransactionsDataAction,
        {
            refetchOnWindowFocus: false,
        }
    );

    console.log(getTransactionData)

  return (
    <section className="mt-[6.37rem] space-y-[2.06rem]">
        {
            !isLoading_Transactions ? (
                <>
                    <TransactionHeader total={getTransactionData?.data?.length}/>
                    <TransactionLists data={getTransactionData?.data}/>
                </>
            ):(
                <>
                    <p>loading</p>
                </>
            )
        }
       
    </section>
  )
}

export default Transactions