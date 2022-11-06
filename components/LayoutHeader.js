import React, { useState } from 'react'
import LayoutMenu from './layoutMenu'
import styles from '../styles/home/Header.module.css'

const LayoutHeader = ({ content, logo, onlyTitle }) => {
  const [status, setStatus] = useState(false)
  return (
    <div className={status ? `${styles.background} ${styles.active}` : `${styles.background}`}>
      <LayoutMenu status={status} statusFunction={setStatus} logo={logo}>
        <div className={styles.glass}></div>
        {
          onlyTitle
            ? <div className={styles.content}>
              <h2>{content.attributes.Titulo}
                {
                  content.attributes.Subtitulo !== undefined &&
                  <>
                  <br /> <span>{content.attributes.Subtitulo}</span>
                  </>
                }
              </h2>
          </div>
            : <>
          <div className={styles.contentVertical}>
            <h2>{content.attributes.Titulo}</h2>
          </div>
          <div className={styles.content3}>
            <p>{content.attributes.Contenido}</p>
          </div>
        </>
        }
        <div className={styles.back}>
          <img
            src={content.attributes.Fondo.data.attributes.url}
            alt={content.attributes.Fondo.data.attributes.alternativeText}
          />
        </div>
          <p className={styles.right}>PH: {content.attributes.Fondo.data.attributes.alternativeText}</p>
      </LayoutMenu>
    </div>
  )
}

export default LayoutHeader
