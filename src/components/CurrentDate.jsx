import React, { useState, useEffect } from "react";

function CurrentDate() {
  function getFormattedDate() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setNow(new Date());
      }, 60000);

      return () => clearInterval(interval);
    }, []);

    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${date}, ${time}`;
  }

  return <p className="text-[0.4375rem] sm:text-base">{getFormattedDate()}</p>;
}

export default CurrentDate;
