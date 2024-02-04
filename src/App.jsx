import React from 'react'
import Background from './component/background'
import Forground from './component/Forground'
function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Forground/>
    </div>
  )
}

export default App
