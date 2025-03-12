import React from 'react'
import { PendingLeaves, LeaveHistory } from '..'

function LeaveRequestsTable() {
  return (
    <div className='flex flex-col h-[25rem] w-full gap-5 pl-3'>
      <PendingLeaves />
      <LeaveHistory />
    </div>
  )
}

export default LeaveRequestsTable