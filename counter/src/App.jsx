import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5
  const [counter, setCounter] = useState(0)
  const increaseValue = () =>{
    setCounter(counter + 1) // even though we have added the multiple counter increment. it wont work as updates are sent to Ui in batches and React fiber takes care of it
    setCounter((prevCounter) =>{counter +1}) //best way to do if we want to update 
    setCounter((prevCounter) =>{counter +1})
    setCounter((prevCounter) =>{counter +1})
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
