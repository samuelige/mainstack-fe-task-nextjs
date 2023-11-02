import TitleMd from '@/_shared/components/TitleMd'
import TitleSm from '@/_shared/components/TitleSm'
import React, {FC} from 'react'
import { Button } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsDownload } from "react-icons/bs";

const TransactionHeader:FC<{total: number}> = ({total}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:justify-between">
        <div>
            <TitleMd>{total || "0"} Transactions</TitleMd>
            <TitleSm>Your transactions for the last 7 days</TitleSm>
        </div>
        <div className="mt-6 md:mt-0 flex flex-row items-center space-x-3">
            <Button
                component="label"
                variant="contained"
                endIcon={<MdKeyboardArrowDown />}
                
            >
                <span className="text-sm">Filter</span>
            </Button>
            <Button
                component="label"
                variant="contained"
                endIcon={<BsDownload />}
            >
                <span className="text-sm">Export list</span>
            </Button>
        </div>
    </div>
  )
}

export default TransactionHeader