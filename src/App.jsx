import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { motion } from 'framer-motion'
import './assets/styles/App.scss'
import Home from './pages/Home';
import Layout from './layout/layout';
import NoMatch from './pages/NoMatch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
