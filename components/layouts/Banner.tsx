import React, { useEffect } from "react"
import styles from "../../styles/Banner.module.scss"
const Banner = () => {
  const setTime = async () => {
    const TET = new Date("Feb 11,2021 24:00:00").getTime();
    let countdown = setInterval(run, 1000);
    function run () {
      const now = new Date().getTime();
      const timeRest = TET - now; // tong so giay con lai de den tet
      const days = Math.floor(timeRest/(1000*60*60*24)) // so ngay con lai
      const hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60)) // so gio con lai
      const minutes = Math.floor(timeRest%(1000*60*60)/(1000*60)) // so phut con lai
      const seconds = Math.floor(timeRest%(1000*60)/1000) // so giay con lai
      const p = document.getElementById('countdown')
      p.innerHTML = days + " DAY " + hours + " : " + minutes + " : " + seconds + " "
      if (timeRest <= 0) {
        clearInterval(countdown);
        p.innerHTML = "HAPPY NEW YEAR";
      }
    }
  }

  useEffect(() => {
    setTime();
  })
  
  return (
    <div className={styles.banner}>
      <p id="countdown"></p>
      <hr/>
      <div className={styles.txt}>
        <h3>Tết Tết Tết, Về nhà ăn tết !!!</h3>
      </div>
    </div>
  )
}

export default Banner;
