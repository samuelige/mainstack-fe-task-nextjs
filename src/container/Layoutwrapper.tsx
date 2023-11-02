"use client"

import React, {FC} from 'react'
import Providers from '@/_lib/providers'
import { IChildren } from '@/types'
import Header from './Header'
import SideNav from './SideNav'
import {fetchUserDataAction} from "@/api/revenue.actions"

const Layoutwrapper:FC<IChildren> = ({children}) => {
  

  return (
    <div className='h-screen overflow-auto [&::-webkit-scrollbar]:appearance-none pl-4 pr-1 bg-white py-4 lg:px-4'>
        <Providers>
          <Header/>
          <main className='flex flex-col w-full h-custom-100'>
            <div className='w-full flex flex-col justify-center h-full xl-1:max-w-[88rem] xl-1:m-auto'>
              <div className='flex flex-row'>
                <div className='hidden lg:block w-[3rem] h-custom-100'>
                  <SideNav/>
                </div>
                <div className='flex-1 flex flex-col h-custom-100 overflow-y-auto [&::-webkit-scrollbar]:appearance-none'>
                  {children}
                </div>
              </div>
            </div>
            
          </main>
            
            
        </Providers>
    </div>
  )
}

export default Layoutwrapper