import React, { useState } from "react";

import { TodayAtten, TimeAtten, MyAtten } from "./index";

function Attendence() {
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row  px-7 w-full gap-4">
      <TodayAtten/>
      <TimeAtten/>
      <MyAtten/>
    </div>
  );
}

export default Attendence;
