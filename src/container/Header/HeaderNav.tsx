import { analytics_icon, apps_icon, crm_icon, home_icon, revenue_icon } from '@/_shared/assets/icons'
import NavList from '@/_shared/components/NavList'
import { NavListProps } from '@/types'
import React from 'react'

const HeaderNav = () => {
  const navItems: NavListProps[] = [
    {
      imageSrc: home_icon, 
      name: "Home", 
      isActive: false
    },
    {
      imageSrc: analytics_icon, 
      name: "Analytics",  
      isActive: false
    },
    {
      imageSrc: revenue_icon, 
      name: "Revenue",  
      isActive: true
    },
    {
      imageSrc: crm_icon, 
      name: "CRM", 
      isActive: false
    },
    {
      imageSrc: apps_icon, 
      name: "Apps", 
      isActive: false
    },
  ]
  return (
    <ul className='flex flex-row space-x-5'>
      {
        navItems?.map(({imageSrc, name, isActive}, index) => (
          <NavList
            key={index}
            imageSrc={imageSrc}
            name={name}
            isActive={isActive}
          />
        ))
      }
    </ul>
  )
}

export default HeaderNav