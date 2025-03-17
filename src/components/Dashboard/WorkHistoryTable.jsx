import React, { useState } from "react";
import workingHistoryData from "../../globaldata/workingHistoryData";
import { EfficientChart } from "..";
import { FaSort } from "react-icons/fa";

function WorkHistoryTable() {
  const [workData, setWorkData] = useState(workingHistoryData);
  const [toggleDate, setToggleDate] = useState("ascending")
  let effiTime = "";

  function calculateTimeDifference(startTime, endTime) {
    const start = new Date(`2025-01-01 ${startTime}`);
    const end =
      endTime === "-Still in office-"
        ? new Date(`2025-01-01 7:00 PM`)
        : new Date(`2025-01-01 ${endTime}`);

    const diffMs = end - start;

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffHours}:${diffMinutes}`;
  }

  function calculateTotalMinutes(startTime, endTime){
    const start = new Date(`2025-01-01 ${startTime}`);
    const end =
      endTime === "-Still in office-"
        ? new Date(`2025-01-01 7:00 PM`)
        : new Date(`2025-01-01 ${endTime}`);

     const diffMs = end - start;
     return diffMs
  }

  function sortByDate() {
    const sortedData = [...workData].sort((a, b) => 
      toggleDate === "ascending" ? Number(a.date) - Number(b.date) : Number(b.date) - Number(a.date)
    );
  
    setWorkData(sortedData);
    setToggleDate(toggleDate === "ascending" ? "descending" : "ascending");
  }

  function sortByArrival() {
    const sortedData = [...workData].sort((a, b) => {
      const timeA = new Date(`2025-01-01 ${a.arrival}`).getTime();
      const timeB = new Date(`2025-01-01 ${b.arrival}`).getTime();
      return toggleDate === "ascending" ? timeA - timeB : timeB - timeA;
    });
  
    setWorkData(sortedData);
    setToggleDate(toggleDate === "ascending" ? "descending" : "ascending");
  }

  function sortByDeparture() {
    const sortedData = [...workData].sort((a, b) => {
      const timeA =
        a.departure === "-Still in office-"
          ? new Date("2025-01-01 7:00 PM").getTime() 
          : new Date(`2025-01-01 ${a.departure}`).getTime();
  
      const timeB =
        b.departure === "-Still in office-"
          ? new Date("2025-01-01 7:00 PM").getTime()
          : new Date(`2025-01-01 ${b.departure}`).getTime();
  
      return toggleDate === "ascending" ? timeA - timeB : timeB - timeA;
    });
  
    setWorkData(sortedData);
    setToggleDate(toggleDate === "ascending" ? "descending" : "ascending");
  }

  function sortByEffectiveTime() {
    const sortedData = [...workData].sort((a, b) => {
      const minutesA = calculateTotalMinutes(a.arrival, a.departure);
      const minutesB = calculateTotalMinutes(b.arrival, b.departure);
      
      return toggleDate === "ascending" ? minutesA - minutesB : minutesB - minutesA;
    });
  
    setWorkData(sortedData);
    setToggleDate(toggleDate === "ascending" ? "descending" : "ascending");
  }
  
  return (
    <div className="overflow-auto no-scrollbar w-full h-[25rem]">
      <ul className="w-120 sm:w-full">
        <li>
          <div className="flex items-center min-w-full xs:w-120 bg-[#f8f8f8] h-12 rounded-2xl px-3 pr-0">
            <div className="flex justify-between items-center w-1/4 ">
              <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                Date
              </p>
              <FaSort
                onClick={sortByDate}
                className="mr-5 text-[#d3d4d9] hover:cursor-pointer"
              />
            </div>
            <div className="flex justify-between items-center w-1/4">
              <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                Arrival
              </p>
              <FaSort onClick={sortByArrival} className="mr-5 text-[#d3d4d9] hover:cursor-pointer" />
            </div>
            <div className="flex justify-between items-center w-1/4">
              <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                Departure
              </p>
              <FaSort onClick={sortByDeparture} className="mr-5 text-[#d3d4d9] hover:cursor-pointer" />
            </div>
            <div className="flex justify-between items-center w-1/4">
              <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                Effective Time
              </p>
              <FaSort onClick={sortByEffectiveTime} className="mr-5 text-[#d3d4d9] hover:cursor-pointer" />
            </div>
          </div>
        </li>
        <div className="mt-3 flex flex-col overflow-y-auto no-scrollbar gap-7 h-[20rem]">
          {workData.map((data, index) => (
            <li key={index}>
              <div className="flex w-full items-center border-b px-3 py-5">
                <div className="flex w-1/4 gap-3 items-center sm:justify-start">
                  <div className="h-7 w-7 rounded-full bg-[#eef1f5] flex justify-center items-center text-[#76797f] font-bold text-sm">
                    {data.date}
                  </div>
                  <p className="block text-[#7e7f82] text-sm font-semibold">
                    {typeof data.date != "string"
                      ? data.date + "/9/24"
                      : "Today"}
                  </p>
                </div>
                <div className="flex justify-start text-[11px] sm:text-sm text-[#868787] w-1/4">
                  {data.arrival}
                </div>
                <div
                  className={`flex justify-start text-[11px] sm:text-sm text-[#868787] w-1/4 ${
                    data.departure === "-Still in office-"
                      ? "text-[#c5c9ca]"
                      : "text-[#868787]"
                  }`}
                >
                  {data.departure}
                </div>
                <div className="flex items-center justify-between mr-2 pl-4 w-1/4">
                  <div className="block flex flex-col items-start">
                    <div className="text-[#5a5b5d] text-sm">
                      {
                        (effiTime = calculateTimeDifference(
                          data.arrival,
                          data.departure
                        ))
                      }
                    </div>
                    <p className="text-[0.6875rem] text-[#868787]">/ 9 hours</p>
                  </div>
                  <EfficientChart effiTime={effiTime} />
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default WorkHistoryTable;
