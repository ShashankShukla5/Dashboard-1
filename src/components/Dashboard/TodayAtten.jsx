import React, { useState } from 'react'
import TodayAttenChart from './TodayAttenChart';
import { RiFingerprint2Line } from "react-icons/ri";
import { Button } from '../index';
import globalData from '@/globaldata/globalData';
import { CountdownTimer } from '../index';


function TodayAtten() {
    const [attendance, setAttendance] = useState(globalData.todayAttendance)
    const [isDisabled, setIsDisabled] = useState(false)

    function todaysAttendance() {
        setAttendance("Present")
        setIsDisabled(true)
    }
    function countdownTimeUp() {
      setIsDisabled(true)
  }

  return (
    <div className="w-full sm:w-full lg:w-[30%] bg-white rounded-xl px-5 border ">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between border-b py-7 mb-5">
          <p>Today</p>
          <span
            className={`text-xs ${
              attendance === "Absent" ? "bg-[#dc4a1a]" : "bg-green-400"
            } text-white px-2 py-1 rounded-xl`}
          >
            {attendance}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between">
          <div className="flex flex-col items-start gap-3">
            <RiFingerprint2Line className="text-3xl text-[#87a2cc]" />
            {attendance === "Absent" ? (
              <p className="text-[#707377] text-left text-sm">
                You have not marked yourself as present today!
              </p>
            ) : (
              <p className="text-[#707377] text-left">
                You have marked yourself as present today!
              </p>
            )}
            <div className={`text-[#707377] border-l-red-600 text-left ${isDisabled ? 'hidden' : ''}`}>
              <CountdownTimer countdownTimeUp={countdownTimeUp}  className={``}/>
            </div>
          </div>
          <div>
            <TodayAttenChart />
          </div>
        </div>
        <Button
          disabled={isDisabled}
          onClick={todaysAttendance}
          className={`bg-[#3078ec] mt-3 my-5 cursor-pointer hover:bg-[#bddbf1] hover:text-[#374f77]`}
        >
          Mark Present
        </Button>
      </div>
    </div>
  );
}

export default TodayAtten;
