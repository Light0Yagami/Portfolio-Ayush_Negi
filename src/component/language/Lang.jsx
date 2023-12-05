import React, { useEffect, useState } from 'react';
import './lang.css';

const Lang = ({finalCounter, Language}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === finalCounter) {
        clearInterval(interval);
      } else {
        setCounter(prevCounter => prevCounter + 1);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [counter, finalCounter]);

  return (
    <div className='language'>
      <div className="outerlang">
        <div className="innerlang">
          <div id="number">
            {counter}%
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80px" height="80px">
         <circle cx="30" cy="30" r="25" stroke-linecap="round" />
    </svg>

      <h1>{Language}</h1>
    </div>
  );
};

export default Lang;
