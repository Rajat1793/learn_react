import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#fff")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 px-2 py-2 rounded-full'style={{backgroundColor: color}}>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "#deebcc"}} onClick = {() => setColor("#deebcc")}>Dirty White</button>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "#63B7B7"}} onClick = {() => setColor("#63B7B7")}>Pastel Teal</button>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "lavender"}} onClick = {() => setColor("lavender")}>lavender</button>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "#FF9B49"}} onClick = {() => setColor("#FF9B49")}>Lucky Orange</button>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "#FFDDF4"}} onClick = {() => setColor("#FFDDF4")}>Pink Lace</button>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "#A30B2E"}} onClick = {() => setColor("#A30B2E")}>Arabian Red</button>
          <button className='outline-none px-4 py-1 rounded-full border' style={{backgroundColor: "#E24666"}} onClick = {() => setColor("#E24666")}>Rouge Red</button>
        </div>
      </div>
    </div>
  )
}

export default App
