import React from 'react'
import style from "./navbar.module.scss"
import logo from "../Photos/Dharsh.svg"

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={logo} alt="" />
      </div>
      <div className={style.navigator}>
        <div className={style.nav_a}>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#myworks">MY WORKS</a>
        </div>
        <div className={style.nav_btn}>
            <button><a href="">CONTACT</a></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
