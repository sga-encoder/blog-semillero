/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/home/Header.module.css'
import NavbarList from './../componets/NavbarList';
import Header from './../componets/Header';
import { useRef, useState } from 'react';
import imagen01 from '../public/images/frailejon.jpg'
import imagen02 from '../public/images/photoGroup.jpg'

const Index = () => {
  const [status, setStatus] = useState(false)
  const scroll = useRef(null)
  const [scrolling, setScrolling] = useState(0)



  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => { setScrolling(window.scrollY) })
  }
  
  const percentage = (num) => {
    try {
      if (typeof window !== 'undefined') {
        const final = num * 100 / scroll.current.offsetHeight
        return final
      }
    } catch (error) {
      console.log(error)
      return 40
    }
  }

  return (
    <>
      <div ref={scroll} className={status ? `${styles.background} ${styles.active}`: styles.background}>   
        <Header status={status} styles={styles} functionClick={() => { setStatus(!status) }}/>
        <div className={styles.glass} style={{width: `${ 60*percentage(scrolling*2)/100+40}%`}}></div>
        <div className={styles.content}>
          <h2>PNNN <br /> <span>Semillero de Investigacion inaes</span></h2>
        </div>
        <div className={percentage(scrolling*2) >= 70 ? `${styles.content2} ${styles.active}` : styles.content2}>
          <div style={{ '--i': 1 }}>
            <Link href={'/quienes-somos'}>
              <h2>Quienes Somos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque, voluptas ducimus in veritatis perspiciatis quas eligendi, velit repellat distinctio mollitia natus illo molestias eum! Sed, libero facere! Dolorem, nam.
              </p>
              <Image src={imagen02} />
            </Link>
          </div>
          <div className={styles.divider} style={{ '--i': 2 }}></div>
          <div style={{ '--i': 3 }}>
            <Link href={'/que-hacemos'}>
              <h2>Que Hacemos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque, voluptas ducimus in veritatis perspiciatis quas eligendi, velit repellat distinctio mollitia natus illo molestias eum! Sed, libero facere! Dolorem, nam.
              </p>
              <Image src={imagen01} />
            </Link>
          </div>
        </div>
        <div className={styles.back}></div>
        <NavbarList styles={styles.navigation}/>

      </div>
    </>
  )
}

export default Index
