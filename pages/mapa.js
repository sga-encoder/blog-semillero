import React, { useState } from 'react'
import styles from '../styles/home/Header.module.css'
import Menu from './../components/Menu'
import NavbarList from './../components/NavbarList'

const Galeria = ({ Images, logo }) => {
  const [status, setStatus] = useState(false)
  return (
    <>
      <div className={status ? `${styles.background} ${styles.active}` : `${styles.background}`}>
        <Menu logo={logo} styles={styles} status={status} title={'Mapa'} functionClick={() => setStatus(!status)} />
        <NavbarList styles={styles.navigation} />

        <div className={styles.mapa}>

      <iframe width="80%" height="60%" src="https://maphub.net/embed_h/OMsnT2sR39EXihIs?panel=1&panel_closed=1" frameBorder="0"></iframe>
        </div>
        <div className={styles.glass}></div>
        <div className={styles.back}>
          <img src="https://res.cloudinary.com/dhobrkfue/image/upload/v1668111058/1668089319092_567f01c806.jpg?updated_at=2022-11-10T20:11:02.860Z" alt="Jhonatan Alexander García - PNNN" />
        </div>
          <p className={styles.right}>PH: Jhonatan Alexander García - PNNN</p>

      </div>
    </>
  )
}

export async function getServerSideProps () {
  const urlLogo = `${process.env.API_URL}/api/logo?populate=*`
  const responseLogo = await fetch(urlLogo)
  const responseJsonHomeLogo = await responseLogo.json()

  return {
    props: {
      logo: responseJsonHomeLogo
    }
  }
}

export default Galeria
