import React from 'react'
import {Greet, Leaves, LeaveStatus} from '..'

function Content() {
  return (
    <div className='flex flex-col bg-[#fafafa] flex w-full sm:w-[calc(100vw-5.5rem)] h-fit sm:ml-18'>
        <Greet/>
        <Leaves/>
        <LeaveStatus />
    </div>
  )
}

export default Content