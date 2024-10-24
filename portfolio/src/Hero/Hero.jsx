import React, { useEffect, useRef } from 'react'
import style from "./hero.module.scss"
import eclipse from "../Photos/Ellipse 78.svg"
import Typed from "typed.js"

function Hero() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings : ["Experiences", "Creativity"],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true
        });

        return() => {
            typed.destroy();
        };
    },[])

  return (
    <div id='home' className={style.container}>
      <div className={style.eclipse}>
        <img src={eclipse} alt="" />
      </div>
        <div className={style.title}>
            <div className={style.title_heading}>
            <p>Designing <span ref={el} className={style.a}></span><br /> 
            One Interaction at a <span className={style.b}>Time.</span></p>
            </div>
            <div className={style.title_info}>
            <p>I’m Harsh Rana, a passionate UI/UX designer who thrives on crafting user-centered designs that not only look great but solve real problems. With a love for clean interfaces, intuitive navigation, and thoughtful interactions, I aim to create digital experiences that leave a lasting impression. Let’s collaborate and turn ideas into visually stunning realities!</p>
            </div>
        </div>
        <div className={style.button}>
            <div className={style.touch}>
                <button>Get In Touch</button>
            </div>
            <div>
                <button className={style.CV}>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
