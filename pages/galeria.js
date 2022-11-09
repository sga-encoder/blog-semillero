import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/home/Header.module.css'
import Menu from './../components/Menu'
import NavbarList from './../components/NavbarList'

const Galeria = ({ Images, logo }) => {
  const [status, setStatus] = useState(false)
  return (
    <>
      <div className={status ? `${styles.background} ${styles.active}` : `${styles.background}`}>
        <Menu logo={logo} styles={styles} status={status} title={'Galeria'} functionClick={() => setStatus(!status)} />
      <NavbarList styles={styles.navigation} />

      <Carousel className='galeriaContainer' showArrows={true} autoPlay={true}>
        {
          Images.data.map(({ id, attributes }) => (
            <div key={id}>
              <img src={attributes.Foto.data.attributes.url} />
              <p className="legend">PH: {attributes.Foto.data.attributes.alternativeText} | {attributes.Descripcion} </p>
            </div>
          ))
        }
      </Carousel>
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const url = `${process.env.API_URL}/api/galerias?populate=*`
  const response = await fetch(url)
  const responseJsonHome = await response.json()

  const urlLogo = `${process.env.API_URL}/api/logo?populate=*`
  const responseLogo = await fetch(urlLogo)
  const responseJsonHomeLogo = await responseLogo.json()

  return {
    props: {
      Images: responseJsonHome,
      logo: responseJsonHomeLogo
    }
  }
}

export default Galeria
