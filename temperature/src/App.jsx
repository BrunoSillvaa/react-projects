import { useState, useEffect } from 'react'
import { useTemperature } from './hooks/useTemperature'
import { Button } from './components/Button'
import './App.css'

function App() {
  const [ temperature, setTemperature] = useState(0)

  function decreaseTemperature() {
    setTemperature(temperature - 1)
  }

  function increaseTemperature() {
    setTemperature(temperature + 1)
  }

  useEffect(() => {
    useTemperature(temperature)
  }, [temperature])

  return (
    <div className="container">
      <h1 className="title">Temperature</h1>
      <h2 className="temp">{temperature}°</h2>
      <div className="buttons">
        <Button onClick={decreaseTemperature}>-</Button>
        <Button onClick={increaseTemperature}>+</Button>
      </div>
    </div>
  )
}

export default App
