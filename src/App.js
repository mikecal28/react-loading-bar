import { useState, useEffect } from "react";

import "./styles.css";
// let iterations = 0;

export default function App() {
  const [width, setWidth] = useState(0);

  const styles = {
    width: width + "%"
  };

  const range = (start, stop) => {
    const arr = [];
    let val = start;

    while (val <= stop) {
      arr.push(val);

      val++;
    }

    return arr;
  };

  useEffect(() => {
    let intervalSwitch = false;
    let speed = 15;
    let percentageInterval = 0;
    const crazyArray = [5, 8, 22, 9, 14, 23, 32, 12, 4, 53, 2];
    // const myArray = range(10, 20);
    // const greaterRange = range(20, 30);

    while (width < 100) {
      if (speed <= 0) {
        speed += 15;
      }
      if (Math.floor(Math.random() * 2) >= 1) {
        speed += crazyArray[Math.floor(Math.random() * crazyArray.length)];
      } else {
        speed -= crazyArray[Math.floor(Math.random() * crazyArray.length)] * 4;
      }

      intervalSwitch = !intervalSwitch;
      if (intervalSwitch === true) {
        percentageInterval += 10;
      } else {
        percentageInterval += 5;
      }

      if (width < percentageInterval) {
        const interval = setInterval(() => {
          setWidth((w) => w + 0.1);
        }, speed);

        return () => clearInterval(interval);
      }
    }
  }, [width]);

  return (
    <div className="app">
      <div style={styles}>
        <span>{width.toFixed(0)}%</span>
      </div>
    </div>
  );
}
