import React from 'react'
import style from "./footer.module.scss"
import img1 from "../Photos/Gmail.svg"
import img2 from "../Photos/upwork 1.svg"
import img3 from "../Photos/Group 483256.svg"
import img4 from "../Photos/Group 483252.svg"
import img5 from "../Photos/Group 483258.png"
import img6 from "../Photos/Group 483257.svg"
import img7 from "../Photos/Group 483254.svg"

function Footer() {
  return (
    <div id='contact' className={style.container}>
      <div className={style.footer_first}>
        <div>
            <h1>Let's <br /> Work Together - </h1>
        </div>
        <div className={style.ftr_btn}>
            <div className={style.fbtn}>
                <button><img src={img1} alt="" />hasrsh81@gmail.com</button>
            </div>
            <div className={style.fbtn}>
                <button style={{backgroundColor : "#1D6400"}}><img src={img2} alt="" />Hire me on Upwork</button>
            </div>
        </div>
      </div>
      <div className={style.footer_lsat}>
        <p>
        © 2024 All rights reserved.
        </p>
        <div className={style.img}>
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
