"use client"

import React from 'react'
import TransactionHeader from './TransactionHeader'
import TransactionLists from './TransactionLists'
import { useQuery } from 'react-query';
import {fetchAllTransactionsDataAction} from "@/api/revenue.actions"
import SkeletonLoaderMd from '@/_shared/components/SkeletonLoader/SkeletonLoaderMd';

const Transactions = () => {
    const { data: getTransactionData, isLoading: isLoading_Transactions } = useQuery(['all_transactions'],
        fetchAllTransactionsDataAction,
        {
            refetchOnWindowFocus: false,
        }
    );

  return (
    <section className="mt-16 space-y-16 md:mt-[6.37rem] md:space-y-[2.06rem]">
        {
            !isLoading_Transactions ? (
                <>
                    <TransactionHeader total={getTransactionData?.data?.length}/>
                    <TransactionLists data={getTransactionData?.data}/>
                </>
            ):(
                <>
                    <SkeletonLoaderMd/>
                </>
            )
        }
       
    </section>
  )
}

export default Transactions