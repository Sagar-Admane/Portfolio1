import React from 'react'
import style from "./testimonal.module.scss"
import img1 from "../Photos/a.svg"

function Testimonal() {
  return (
    <div id='about' className={style.container}>
      <div className={style.testimonal}>
        <div className={style.test_head}>
            <div>
                <h2>Testimonial</h2>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
        <div className={style.test_info}>
            <p className={style.normal}>Harsh was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Harsh was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank harsh enough for his effort and professionalism. I would recommend him to anyone looking for a design!</p>
            <br />
            <p className={style.bold}>-ARSHIT</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonal
