import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5
  const [counter, setCounter] = useState(0)
  const increaseValue = () =>{
    setCounter(counter + 1)
  }
  const decreaseValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2> Counter value: {counter}</h2>
      <button onClick = {increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
