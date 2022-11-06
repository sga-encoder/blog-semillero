import Link from 'next/link'
import styles from '../styles/home/Header.module.css'
import React, { useEffect, useRef, useState } from 'react'
import LayoutMenu from '../components/layoutMenu'

const Index = ({ content, about, whatDoWeDo, logo }) => {
  const [status, setStatus] = useState(false)
  const scroll = useRef(null)
  const [scrolling, setScrolling] = useState(0)
  const [movil, setMovil] = useState(false)

  useEffect(() => {
    if (isMobile() === null) {
      setMovil(false)
    } else {
      setMovil(true)
    }
  })

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

  function isMobile () {
    return (
      (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    )
  }

  return (
    <>
      <div ref={scroll} className={status ? `${styles.background} ${styles.active}` : styles.background}>
        <LayoutMenu status={status} statusFunction={setStatus} logo={logo}>
          <div className={styles.glass} style={{ width: `${60 * percentage(scrolling * 2) / 100 + 40}%` }}></div>
          <div className={styles.content}>
            <h2>{content.data.attributes.Titulo}<br /> <span>{content.data.attributes.Subtitulo}</span></h2>
          </div>
          <div className={percentage(scrolling * 2) >= 70 || movil ? `${styles.content2} ${styles.active}` : styles.content2}>
            <div style={{ '--i': 1 }}>
              <h2>{about.data.attributes.Titulo}</h2>
              <p>{about.data.attributes.Descripcion}</p>
              <img
                src={about.data.attributes.Fondo.data.attributes.url}
                alt={about.data.attributes.Fondo.data.attributes.alternativeText}
              />
              <Link href={'/quienes-somos'}>
                ver mas
              </Link>
            </div>
            <div className={styles.divider} style={{ '--i': 2 }}></div>
            <div style={{ '--i': 3 }}>
              <h2>{whatDoWeDo.data.attributes.Titulo}</h2>
              <p>{whatDoWeDo.data.attributes.Descripcion}</p>
              <img
                src={whatDoWeDo.data.attributes.Fondo.data.attributes.url}
                alt={whatDoWeDo.data.attributes.Fondo.data.attributes.alternativeText}
              />
              <Link href={'/que-hacemos'}>
                ver mas
              </Link>
            </div>
          </div>
          <div className={styles.back}>
            <img
              src={content.data.attributes.Fondo.data.attributes.url}
              alt={content.data.attributes.Fondo.data.attributes.alternativeText}
            />
          </div>
          <p className={styles.right2}>PH: {content.data.attributes.Fondo.data.attributes.alternativeText}</p>
        </LayoutMenu>

      </div>
    </>
  )
}

export async function getServerSideProps () {
  const urlHome = `${process.env.API_URL}/api/hogar/?populate=*`
  const responseHome = await fetch(urlHome)
  const responseJsonHome = await responseHome.json()

  const urlAbout = `${process.env.API_URL}/api/quienes-somo/?populate=*`
  const responseAbout = await fetch(urlAbout)
  const responseJsonAbout = await responseAbout.json()

  const urlWhatDoWeDO = `${process.env.API_URL}/api/que-hacemo/?populate=*`
  const responseWhatDoWeDO = await fetch(urlWhatDoWeDO)
  const responseJsonWhatDoWeDO = await responseWhatDoWeDO.json()

  const urlLogo = `${process.env.API_URL}/api/logo/?populate=*`
  const responseLogo = await fetch(urlLogo)
  const responseJsonLogo = await responseLogo.json()

  return {
    props: {
      content: responseJsonHome,
      about: responseJsonAbout,
      whatDoWeDo: responseJsonWhatDoWeDO,
      logo: responseJsonLogo
    }
  }
}

export default Index
