import React, { useState } from 'react';

const Value = () => {
  const [newvalue, setnewvalue] = useState(0);

  function increment() {
    setnewvalue(newvalue + 1);
  }

  function decrement() {
    setnewvalue(newvalue - 1);
  }

  function reset() {
    setnewvalue(0);
  }

  return (
    <div className='contt'>
      <div className='maindiv'>
        <div className='value'>
          <h1>{newvalue}</h1>
          <div className='btndiv'>
            <button className='btns btn1' onClick={decrement}>-</button>
            <button className='btns btn2' onClick={increment}>+</button>
          </div>
        </div>
        <div className='resett'>
          <button className='reset-button' onClick={reset}>Reset</button>
        </div>
      </div>
      
    </div>
  );
};

export default Value;
