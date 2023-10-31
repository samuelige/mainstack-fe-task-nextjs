import React, {FC} from 'react'
import Providers from '@/_lib/providers'
import { IChildren } from '@/types'
import Header from './Header'

const Layoutwrapper:FC<IChildren> = ({children}) => {
  return (
    <div className='h-screen overflow-auto bg-white pt-4 px-4'>
        <Providers>
            <Header/>
            {children}
        </Providers>
    </div>
  )
}

export default Layoutwrapper