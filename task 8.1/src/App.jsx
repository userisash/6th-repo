import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NewBox1 from './Newbox'
import './Boxesfile.css'
import Box1 from './Boxescomponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NewBox1></NewBox1>
      <Box1></Box1>
    </div>
  )
}

export default App
