import { menu_icon } from '@/_shared/assets/icons'
import Image from 'next/image'
import { useQuery } from 'react-query';
import {fetchUserDataAction} from "@/api/revenue.actions"
import CustomLoader from '@/_shared/components/CustomLoader';

const Menu = () => {
  const { data: getUserData, isLoading: isLoading_User } = useQuery(['user'],
    fetchUserDataAction,
      {
          refetchOnWindowFocus: false,
      }
  );
  return (
    <>
      {
        !isLoading_User ? (
          <li className='py-1 pl-[0.31rem] pr-3 cursor-pointer space-x-2 bg-gray50 rounded-[6.25rem] flex flex-row'>
              <div className='w-8 h-8 text-center text-white bg-black300 rounded-full flex flex-col justify-center'>{`${getUserData?.first_name[0]} ${getUserData?.last_name[0]}`}</div>
              <Image src={menu_icon} width={20} height={20} alt="menu_icon"/>
          </li>
        ) : (
          <>
            <CustomLoader/>
          </>
        )
      }
    </>
    
  )
}

export default Menu