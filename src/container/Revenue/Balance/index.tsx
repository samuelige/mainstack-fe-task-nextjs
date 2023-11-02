"use client"

import React from 'react'
import { useQuery } from 'react-query';
import AvailableBalance from './AvailableBalance'
import DataChart from './DataChart'
import Categories from './Categories'
import {fetchWalletDataAction} from "@/api/revenue.actions"
import { toCurrency } from '@/_lib/utils/toCurrency';
import SkeletonLoaderMd from '@/_shared/components/SkeletonLoader/SkeletonLoaderMd';

const BalanceContainer = () => {
  const { data: getWalletData, isLoading: isLoading_Wallet } = useQuery(['wallets'],
    fetchWalletDataAction,
        {
            refetchOnWindowFocus: false,
        }
    );
  return (
    <div className='flex flex-col-reverse lg:space-x-[7.74rem] lg:flex-row items-start justify-between'>
      {
        !isLoading_Wallet ? (
            <>
              <div className='mt-8 lg:mt-0 flex flex-col'>
                <AvailableBalance balance={toCurrency(getWalletData?.data?.balance, "USD")}/>
                <DataChart/>
              </div>
              <div className='w-full flex flex-col lg:w-[16.9375rem]'>
                <Categories data={getWalletData?.data}/>
              </div>
            </>
        ):(
            <>
              <SkeletonLoaderMd/>
            </>
        )
      }
      
    </div>
  )
}

export default BalanceContainer