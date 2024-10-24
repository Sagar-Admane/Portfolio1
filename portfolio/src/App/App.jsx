import React from 'react'
import style from "./app.module.scss"
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Testimonal from '../Testimonal/Testimonal'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <Hero />
      <About />
      <Testimonal />
      <Footer />
    </div>
  )
}

export default App
