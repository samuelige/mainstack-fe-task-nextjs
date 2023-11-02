import React, {FC, PropsWithChildren} from 'react'

const TitleSm:FC<PropsWithChildren> = ({children}) => {
  return (
    <small className='text-sm text-gray400 font-medium tracking-[-0.0125rem]'>{children}</small>
  )
}

export default TitleSm