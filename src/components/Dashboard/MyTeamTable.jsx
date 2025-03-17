import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamData from "../../globaldata/teamData";
import { FaSort } from "react-icons/fa";

function MyTeamTable() {
  return (
    <div className="overflow-auto no-scrollbar w-full h-[25rem]">
      <ul className="w-120 sm:w-full">
        <li>
          <div className="flex items-center min-w-full xs:w-120 bg-[#f8f8f8] h-12 rounded-2xl px-3 pr-0">
            <div className="flex w-1/2 justify-between gap-2">
              <div className="flex justify-between items-center w-2/3 ">
                <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                  Members
                </p>
                <FaSort className="mr-5 text-[#d3d4d9]" />
              </div>
              <div className="flex justify-between items-center w-1/3">
                <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                  Today
                </p>
                <FaSort className="mr-5 text-[#d3d4d9]" />
              </div>
            </div>
            <div className="flex w-1/2 justify-between">
              <div className="flex justify-between items-center w-1/3">
                <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                  25/9
                </p>
                <FaSort className="mr-5 text-[#d3d4d9]" />
              </div>
              <div className="flex justify-between items-center w-1/3">
                <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                  24/9
                </p>
                <FaSort className="mr-5 text-[#d3d4d9]" />
              </div>
              <div className="flex justify-between items-center w-1/3">
                <p className="text-[#717579] font-bold text-[12px] sm:text-[0.75rem]">
                  23/9
                </p>
                <FaSort className="mr-5 text-[#d3d4d9]" />
              </div>
            </div>
          </div>
        </li>
        <div className="mt-3 flex flex-col overflow-y-auto no-scrollbar gap-7 h-[20rem]">
          {teamData.map((member, i) => (
            <div key={i} className="w-full flex">
              <div className="flex items-center justify-between gap-2 w-1/2">
                <div className="flex items-center w-2/3 gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col ">
                    <p className="text-left text-sm">{member.name}</p>
                    <span className="text-[0.625rem] text-[#7e8284] text-left">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="w-1/3 flex items-center mr-3 gap-1">
                  <div
                    className={`min-h-2 min-w-2 h-2 w-2 rounded-full bg-blue-600 ${
                      member.inStatus === "in office" ? "bg-blue-600" : ""
                    } ${member.inStatus === "absent" ? "bg-gray-600" : ""} ${
                      member.inStatus === "on leave" ? "bg-red-600" : ""
                    } ${
                      member.inStatus === "work from home"
                        ? "bg-yellow-600"
                        : ""
                    }`}
                  ></div>
                  <p className="text-[#7e8284] text-sm">
                    {member.inTime.today}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 w-1/2">
                <div className="flex items-center gap-1 w-1/3 text-[0.6875rem]">
                  <div
                    className={`min-h-2 min-w-2 h-2 w-2 rounded-full bg-blue-600 ${
                      member.inStatus === "in office" ? "bg-blue-600" : ""
                    } ${member.inStatus === "absent" ? "bg-gray-600" : ""} ${
                      member.inStatus === "on leave" ? "bg-red-600" : ""
                    } ${
                      member.inStatus === "work from home"
                        ? "bg-yellow-600"
                        : ""
                    }`}
                  ></div>
                  <p className="text-[#878b8e]">{member.inTime.twentyFive}</p>
                </div>
                <div className="flex items-center gap-1 w-1/3 text-[0.6875rem]">
                <div
                      className={`min-h-2 min-w-2 h-2 w-2 rounded-full bg-blue-600 ${
                        member.inStatus === "in office" ? "bg-blue-600" : ""
                      } ${member.inStatus === "absent" ? "bg-gray-600" : ""} ${
                        member.inStatus === "on leave" ? "bg-red-600" : ""
                      } ${
                        member.inStatus === "work from home"
                          ? "bg-yellow-600"
                          : ""
                      }`}
                    ></div>
                    <p className="text-[#878b8e]">{member.inTime.twentyFour}</p>
                </div>
                <div className="flex items-center gap-1 w-1/3 text-[0.6875rem]">
                  <div className={`h-2 w-2 rounded-full bg-gray-600 `}></div>
                  <p className="text-[#878b8e]">Weekend</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default MyTeamTable;

// {/* <div className="flex w-full overflow-y-auto rounded-2xl">
//       <div className="w-full rounded-2xl sm:rounded-l-2xl overflow-y-auto no-scrollbar sm:border-r">
//         <table className="table-fixed">
//           <thead className="bg-[#f8f8f8] h-12 rounded-2xl">
//             <tr>
//               <th className="w-[70%] font-light">
//                 <div className="flex justify-between">
//                   <div className="flex w-2/3 justify-between items-center ml-2">
//                     <p className="text-[#717579] font-bold text-sm">Members</p>
//                     <FaSort className="mr-5 text-[#d3d4d9]" />
//                   </div>
//                   <div className="flex w-1/3 justify-between items-center gap-4">
//                     <p className="text-[#717579] font-bold text-sm">Today</p>
//                     <FaSort className="text-[#d3d4d9] mr-2" />
//                   </div>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <div className="mt-3 flex flex-col overflow-y-auto no-scrollbar gap-7 h-[20rem]">
//               {teamData.map((member) => (
//                 <td>
//                   <div className="flex items-center justify-between gap-3">
//                     <div className="flex items-center w-2/3 gap-3">
//                       <Avatar>
//                         <AvatarImage src={member.avatar} />
//                         <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
//                       </Avatar>
//                       <div className="flex flex-col ">
//                         <p className="text-left text-sm">{member.name}</p>
//                         <span className="text-[0.625rem] text-[#7e8284] text-left">
//                           {member.role}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="w-1/3 flex items-center mr-3 gap-1">
//                       <div
//                         className={`h-2 w-2 rounded-full bg-blue-600 ${
//                           member.inStatus === "in office" ? "bg-blue-600" : ""
//                         } ${
//                           member.inStatus === "absent" ? "bg-gray-600" : ""
//                         } ${
//                           member.inStatus === "on leave" ? "bg-red-600" : ""
//                         } ${
//                           member.inStatus === "work from home"
//                             ? "bg-yellow-600"
//                             : ""
//                         }`}
//                       ></div>
//                       <p className="text-[#7e8284] text-sm">
//                         {member.inTime.today}
//                       </p>
//                     </div>
//                   </div>
//                 </td>
//               ))}
//             </div>
//           </tbody>
//         </table>
//       </div>
//       {/* ----------------------------------------------------------------- */}
//       <div className="hidden sm:block overflow-x-auto no-scrollbar w-full rounded-r-2xl">
//         <table className="table-fixed">
//           <thead className="bg-[#f8f8f8] h-12 rounded-2xl">
//             <tr>
//               <th className="w-[10%] font-light">
//                 <div className="flex justify-between">
//                   <div className="flex w-1/3 justify-between items-center ml-2">
//                     <p className="text-[#717579] font-bold text-sm">25/9</p>
//                     <FaSort className="mr-5 text-[#d3d4d9]" />
//                   </div>
//                   <div className="flex w-1/3 justify-between items-center gap-4">
//                     <p className="text-[#717579] font-bold text-sm">24/9</p>
//                     <FaSort className="text-[#d3d4d9] mr-2" />
//                   </div>
//                   <div className="flex w-1/3 justify-between items-center gap-4">
//                     <p className="text-[#717579] font-bold text-sm">23/9</p>
//                     <FaSort className="text-[#d3d4d9] mr-2" />
//                   </div>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <div className="mt-3 flex flex-col overflow-y-auto no-scrollbar gap-7 h-[20rem] ml-2">
//               {teamData.map((member) => (
//                 <td>
//                   <div className="w-full flex gap-2 pr-2 h-13">
//                     <div className="w-1/3 flex items-center gap-1 text-[0.6875rem]">
//                       <div
//                         className={`h-2 w-2 rounded-full bg-blue-600 ${
//                           member.inStatus === "in office" ? "bg-blue-600" : ""
//                         } ${
//                           member.inStatus === "absent" ? "bg-gray-600" : ""
//                         } ${
//                           member.inStatus === "on leave" ? "bg-red-600" : ""
//                         } ${
//                           member.inStatus === "work from home"
//                             ? "bg-yellow-600"
//                             : ""
//                         }`}
//                       ></div>
//                       <p className="text-[#878b8e]">{member.inTime.twentyFive}</p>
//                     </div>
//                     <div className="w-1/3 flex items-center gap-1 text-[0.6875rem]">
//                       <div
//                         className={`h-2 w-2 rounded-full bg-blue-600 ${
//                           member.inStatus === "in office" ? "bg-blue-600" : ""
//                         } ${
//                           member.inStatus === "absent" ? "bg-gray-600" : ""
//                         } ${
//                           member.inStatus === "on leave" ? "bg-red-600" : ""
//                         } ${
//                           member.inStatus === "work from home"
//                             ? "bg-yellow-600"
//                             : ""
//                         }`}
//                       ></div>
//                       <p className="text-[#878b8e]">{member.inTime.twentyFive}</p>
//                     </div>
//                     <div className="w-1/3 flex items-center gap-1 text-[0.6875rem]">
//                       <div
//                         className={`h-2 w-2 rounded-full bg-gray-600 `}
//                       ></div>
//                       <p className="text-[#878b8e]">Weekend</p>
//                     </div>
//                   </div>
//                 </td>
//               ))}
//             </div>
//           </tbody>
//         </table>
//       </div>
//     </div> */}
