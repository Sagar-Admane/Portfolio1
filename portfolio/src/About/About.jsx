import React from 'react'
import style from "./about.module.scss"
import img1 from "../Photos/travel.svg"
import img2 from "../Photos/Arrow_Up_Right_MD.svg"
import img3 from "../Photos/rare.svg"
import img4 from "../Photos/furry.svg"
import img5 from "../Photos/link.svg"

function About() {
  return (
    <div id='myworks' className={style.container}>
      <div className={style.about_heading}>
        <div className={style.head}>
        <h2>My Projects <span className={style.head_span}>Highlight</span></h2>
        </div>
        <div className={style.about_info}>
        <p>Discover my skills and creativity in action, with just one click.</p>
        </div>
      </div>
      <div className={style.pprojects}>
        <div className={style.projects}>
            <div className={style.card}>
                <div className={style.travel_planner}>
                    <div className={style.thefront}><img src={img1} alt="" /></div>
                    <div className={style.theback}><img src={img1} alt="" /></div>
                    <div>
                        <button className={style.btn}>Landing Page</button>
                        <button className={style.btn}>Ui & Ux</button>
                        <button className={style.view}><p>View Project </p><img src={img2} alt="" /></button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <div className={style.travel_planner}>
                    <div className={style.thefront}><img src={img3} alt="" /></div>
                    <div className={style.theback}><img src={img3} alt="" /></div>
                    <div>
                        <button className={style.btn}>Landing Page</button>
                        <button className={style.btn}>Ui & Ux</button>
                        <button className={style.view}><p>View Project </p><img src={img2} alt="" /></button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <div className={style.travel_planner}>
                    <div className={style.thefront}><img src={img4} alt="" /></div>
                    <div className={style.theback}><img src={img4} alt="" /></div>
                    <div>
                        <button className={style.btn}>Landing Page</button>
                        <button className={style.btn}>Ui & Ux</button>
                        <button className={style.view}><p>View Project </p><img src={img2} alt="" /></button>
                    </div>
                </div>
            </div>

            <div className={style.card}>
                <div className={style.travel_planner}>
                    <div className={style.thefront}><img src={img5} alt="" /></div>
                    <div className={style.theback}><img src={img5} alt="" /></div>
                    <div>
                        <button className={style.btn}>Landing Page</button>
                        <button className={style.btn}>Ui & Ux</button>
                        <button className={style.view}><p>View Project </p><img src={img2} alt="" /></button>
                    </div>
                </div>
            </div>

        </div>
      </div>

        <div className={style.about_last}>
            <button><p>Explore More</p></button>
        </div>

    </div>
  )
}

export default About
