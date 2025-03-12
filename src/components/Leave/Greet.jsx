import React from 'react'
import { PiClockCountdown } from "react-icons/pi";
import globalData from '@/globaldata/globalData';
import { CurrentDate } from '..';    

function Greet() {
    const date = new Date()
    return (
        <div className='flex h-max w-full items-center justify-between px-7 py-7'>
            <div className='flex flex-col items-start'>
                <span className='text-[0.75rem] sm:text-3xl'>Good Afternoon, {globalData.userName}!</span>
                <p className='text-[#707377] text-[7px] sm:text-base'>{`You have ${globalData.leaveReqPending} leave request pending`}</p>
            </div>
            <div className='bg-white px-5 py-2 flex items-center gap-5 rounded-2xl border'>
                <div className='flex flex-col items-start'>
                    <span className='text-[#707377] text-[0.75rem] sm:text-base'>Current Time</span>
                    <CurrentDate />
                </div>
                <PiClockCountdown className='text-4xl text-[1.375rem] sm:text-4xl'/>
            </div>
        </div>
    )
}

export default Greet