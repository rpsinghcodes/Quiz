import React, { useState, useEffect } from "react";

const Header = ({setTimeOut}) => {
  
  const totalTime = 1;
  const startTime = new Date();
  const [timeElapsed, setTimeElapsed] = useState(0);
  

  useEffect(() => {
    setInterval(() => {
      setTimeElapsed(Math.floor((new Date() - startTime) / 1000));
    }, 1000);
  }, []);

  const remainingTime = totalTime * 60 - timeElapsed;
  const sec = remainingTime % 60;
  const min = Math.floor(remainingTime / 60) % 60;
  if(sec==0 && min ==0){
    setTimeOut(true);
  }
  

  return (
    <header>
      <div className="studentDetail">
        <h3>Name:xyz</h3>
        <h3>RollNumber:xyz</h3>
        <h3>Title of Paper</h3>
      </div>
      <div className="time">
        <h3>Total Time - {totalTime} min</h3>
        <h3>
          Time Remaining - {min}:{sec}
        </h3>
      </div>
    </header>
  );
};
export default Header;