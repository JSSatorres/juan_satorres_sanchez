import React from 'react'
import Router from './Router'
import './assets/styles/App.scss'
import PositionProvider from './context/positionContext'

function App() {
  return (
    <PositionProvider>
      <Router />
    </PositionProvider>
  )
}

export default App
