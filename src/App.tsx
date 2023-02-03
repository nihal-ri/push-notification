import { useEffect } from 'react'
import './App.css'
import runOneSignal from './oneSignal'

function App() {
  useEffect(() => {
    runOneSignal()
  }, [])
  return (
    <div className='App'>
      <h1>Testing push notifications</h1>
    </div>
  )
}

export default App
