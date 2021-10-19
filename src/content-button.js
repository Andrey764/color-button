import React, { useState } from 'react';

export function Example(props) {
  const [count, setCount] = useState(0);
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);
  return (
    <>
    <div>
      <p style={{backgroundColor: `rgb(${red},${green},${blue})`}}>Текущее значение: {count}</p>
      <button onClick={() => setCount(count + props.value1)}>{props.value1}</button>
      <button onClick={() => setCount(count + props.value2)}>{props.value2}</button>
      <button onClick={() => setCount(count + props.value3)}>{props.value3}</button>
    </div>
    <div>
      <button onClick={() => setRed(red + 5)}>+Red</button>
      <button onClick={() => setRed(red - 5)}>-Red</button>
    </div>
    <div>
      <button onClick={() => setGreen(green + 5)}>+Green</button>
      <button onClick={() => setGreen(green - 5)}>-Green</button>
    </div>
    <div>
      <button onClick={() => setBlue(blue + 5)}>+Blue</button>
      <button onClick={() => setBlue(blue - 5)}>-Blue</button>
    </div>
    </>
  );
}