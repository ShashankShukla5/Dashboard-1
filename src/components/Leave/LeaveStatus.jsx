import React from 'react'
import { LeaveRequests, MyLeaves } from '..'

function LeaveStatus() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row  px-7 w-full gap-4">
        <MyLeaves/>
        <LeaveRequests/>
    </div>
  )
}

export default LeaveStatus