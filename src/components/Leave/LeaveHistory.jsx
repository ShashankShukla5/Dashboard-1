import React from 'react'
import { LeaveHistoryTable } from '..'

function LeaveHistory() {
  return (
    <div className="flex flex-col gap-3 h-1/2 px-3">
        <div className='text-xs font-medium text-[#c3c9cf]'>LEAVE HISTORY</div>
        <div className='overflow-auto no-scrollbar'>
        <LeaveHistoryTable/>
        </div>
        
    </div>
  )
}

export default LeaveHistory