import React, { useState, useEffect } from "react";
import globalData from "@/globaldata/globalData";
import { Toaster, toast } from "react-hot-toast";

function CountdownTimer({
  minutes = globalData.timeLeft,
  seconds = 0,
  countdownTimeUp,
}) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60 + seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      countdownTimeUp();
      toast.error("Time's up You have been marked absent! ⏳");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const displayMinutes = Math.floor(timeLeft / 60);
  const displaySeconds = timeLeft % 60;
  return (
    <div>
      Time Left:{" "}
      <span className="text-red-600">
        {displayMinutes}m {displaySeconds}s
      </span>
      <Toaster richColors position="top-center" />
    </div>
  );
}

export default CountdownTimer;
