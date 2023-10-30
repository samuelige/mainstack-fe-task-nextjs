import React, {FC} from 'react'
import Providers from '@/_lib/providers'
import { IChildren } from '@/types/children'

const Layoutwrapper:FC<IChildren> = ({children}) => {
  return (
    <div className='h-screen overflow-auto bg-dark '>
        <Providers>
            {children}
        </Providers>
    </div>
  )
}

export default Layoutwrapper