import React, { FC, PropsWithChildren } from 'react'

const TitleMd:FC<PropsWithChildren> = ({children}) => {
  return (
    <h3 className='text-[1.5rem] text-black300 font-bold leading-[2rem] tracking-[-0.0375rem]'>{children}</h3>
  )
}

export default TitleMd