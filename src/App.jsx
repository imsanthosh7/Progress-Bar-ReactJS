import { useState } from 'react'
import './App.css'
import ProgressBar from './assets/Components/ProgressBar'

function App() {

  const [show, setShow] = useState(true);


  return (
    <>
      {show && <ProgressBar />}
      <button onClick={() => setShow(!show)} className='toggle-btn'>Toggle BrogressBar</button>
    </>
  )
}

export default App
