import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const empleados = [{ nombre: "Juan", edad: 25, salario: 1800 },
    { nombre: "Ana", edad: 30, salario: 2200 },
    { nombre: "Luis", edad: 28, salario: 2500 }]

  function filtrarOrdenar() {
    return empleados.filter((empleado) => empleado["salario"] > 2000).sort((a, b) => a["edad"] - b["edad"])
  }

  useEffect(() => {
    console.log(filtrarOrdenar())
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
