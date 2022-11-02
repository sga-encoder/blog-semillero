import { useState } from 'react';
import NavbarList from '../componets/NavbarList';
import Header from '../componets/Header';
import styles from '../styles/home/Header.module.css'


const WhatDoWeDo = () => {
  const [status, setStatus] = useState(false)

  return (
    <>
      <div
        className={status ?
          `${styles.background} ${styles.background2} ${styles.active}` :
          `${styles.background} ${styles.background2}`}>   
        <Header status={status} styles={styles} functionClick={() => { setStatus(!status) }}/>
        <div className={styles.glass}></div>
        <div className={styles.contentVertical}>
          <h2>QUE HACEMOS</h2>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quasi, excepturi tenetur sed fugit quod beatae quos nemo! Voluptatibus unde velit, earum corporis dolore aut soluta nam. Sequi, excepturi officiis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, debitis! Laudantium, asperiores fugiat ipsam sunt provident placeat sequi eos tenetur blanditiis, consequatur, mollitia ex praesentium minima. Deleniti ullam repellendus amet?
          </p>
        </div>
        <div className={styles.back}></div>
        <NavbarList styles={styles.navigation}/>
      </div>
    </>
  )
}

export default WhatDoWeDo