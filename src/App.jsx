import React from 'react'
import Router from './Router'
// import { useState } from 'react'
// import { Routes, Route, Outlet, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
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
