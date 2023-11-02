import { chart, chartLine } from '@/_shared/assets/images'
import Image from 'next/image'
import React from 'react'

const DataChart = () => {
  return (
    <div className='w-full'>
        <div className='h-[16.0625rem] flex flex-col justify-end'>
            <Image src={chart} width={765} height={257}  alt="chart_img"/>
        </div>
        
        <Image src={chartLine} width={765} height={0}  alt="chartLine_img" className='mt-[1.19rem]'/>
        <div className='w-full flex flex-row justify-between items-start mt-[0.94rem]'>
            <p>Apr 1 ,  2022</p>
            <p>Apr 30 ,  2022</p>
        </div>
    </div>
  )
}

export default DataChart