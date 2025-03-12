import React from 'react'
import {Attendence, Greet, AttendanceData} from '../index'

function Content() {
  return (
    <div className='flex flex-col bg-[#fafafa] flex w-full sm:w-[calc(100vw-5.5rem)] h-fit sm:ml-18'>
        <Greet/>
        <Attendence />
        <AttendanceData/>
    </div>
  )
}

export default Content