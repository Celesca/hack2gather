import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    console.log('Hello World')
  })

  return (
    <>
      <h1 className="bg-red-500">Hello World</h1>
    </>
  )
}

export default App
