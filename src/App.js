import React, { useMemo, useState } from 'react'
import "./App.css";

const App = () => {
  function onWeight(event) {
    setWeight(event.target.value)
  }
  function onHeight(event) {
    setHeight(event.target.value)
  }
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(160);

  const output = useMemo(() => {
    const calculate = height / 100;
    return (weight / (calculate * calculate)).toFixed(1)
  }, [weight, height])
  return (
    <div>
      <main className='bmi-cal'>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
          <p className='slider-output'>Weight:{weight}kg</p>
          <input className='input-slider' type='range'
            step="1" min="40" max="180" onChange={onWeight} />
          <p className='silder-output'>Height:{height}cm</p>
          <input className='input-slider' type='range' step="1"
            min="140" max="220" onChange={onHeight} />
        </div>
        <div className='output-section'>
          <p>Your BMI is</p>
          <p className='output'>{output}</p>
        </div>
      </main>
    </div>
  )
}

export default App
