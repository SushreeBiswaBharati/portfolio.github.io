import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Education from './components/Qualification/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <div className="bg-[#171d32] h-auto overflow-hidden">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App