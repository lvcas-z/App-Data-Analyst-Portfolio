import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div
      className={dark ? 'app dark' : 'app'}
      data-theme={dark ? 'dark' : 'light'}
    >
      <ScrollToTop/>
      <Navbar
        dark={dark}
        setDark={setDark}
      />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/:id"
          element={<Detail />}
        />
      </Routes>
    </div>
  )
}