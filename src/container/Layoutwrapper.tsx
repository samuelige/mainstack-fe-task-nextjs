import React, {FC} from 'react'
import Providers from '@/_lib/providers'
import { IChildren } from '@/types/children'

const Layoutwrapper:FC<IChildren> = ({children}) => {
  return (
    <div className='h-screen overflow-auto bg-white pt-4 px-4'>
        <Providers>
            {children}
        </Providers>
    </div>
  )
}

export default Layoutwrapper