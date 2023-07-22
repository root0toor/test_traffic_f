import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";

const TrafficSignal = () => {
  const [currentSignalIndex, setCurrentSignalIndex] = useState(0);

  const signals = useMemo(() => ["red", "yellow", "green"], []);

  useEffect(() => {
    let currentIndex = currentSignalIndex;

    const interval = setInterval(() => {
      // Calculate the next index to switch to the next signal
      currentIndex = (currentIndex + 1) % signals.length;
      console.log("currentIndex : ", currentIndex);
      setCurrentSignalIndex(currentIndex);
    }, 1000); // Change signal every 2 seconds

    return () => clearInterval(interval);
  }, [currentSignalIndex, signals]); // Include currentSignalIndex and signals in the dependency array

  return (
    <>
      <div className="traffic-signal">
        <div className={`light active ${signals[currentSignalIndex]}`}></div>
      </div>
      <div className="traffic-signal">
        <div
          className={`light active ${
            signals[(currentSignalIndex + 1) % signals.length]
          }`}
        ></div>
      </div>
      <div className="traffic-signal">
        <div
          className={`light active ${
            signals[(currentSignalIndex + 2) % signals.length]
          }`}
        ></div>
      </div>
    </>
  );
};

export default TrafficSignal;
