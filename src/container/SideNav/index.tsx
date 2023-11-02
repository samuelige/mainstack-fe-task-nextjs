import { blog_icon, store_icon, invoicing_icon, media_kit_icon } from '@/_shared/assets/icons'
import { Tooltip } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {
    const sideNavItems: Record<string, string>[] = [
        {
            icon: blog_icon,
            path: "",
            pathName: "Link in Bio",
        },
        {
            icon: store_icon,
            path: "",
            pathName: "Store",
        },
        {
            icon: media_kit_icon,
            path: "",
            pathName: "Media Kit",
        },
        {
            icon: invoicing_icon,
            path: "",
            pathName: "Invoicing",
        },
    ]
  return (
    <div className='flex flex-col p-1 bg-white space-y-2 mt-[14.38rem] shadow-light100  rounded-[6.25rem]'>
        {
            sideNavItems?.map(({icon,pathName}, index) => (
                <Tooltip 
                    key={index} 
                    disableFocusListener 
                    arrow placement="right" 
                    disableTouchListener  
                    title={pathName}
                    classes={{
                        arrow: "before:bg-black300 before:border-[1px] before:border-[#131316]",
                        tooltip: "bg-black300 border-[1px] border-[#131316] rounded-lg text-white p-3",
                    }}
                    >
                    <div className='w-[2.5rem] h-[2.5rem] group flex flex-col justify-center items-center hover:rounded-full hover:bg-gray50'>
                        <Image src={icon} width={20} height={20}  alt="sideNav-icon" className='grayscale group-hover:grayscale-0'/>
                    </div>
                </Tooltip>
            ))
        }
    </div>
  )
}

export default SideNav