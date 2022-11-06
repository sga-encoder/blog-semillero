import Link from 'next/link'
import React from 'react'

const Menu = ({ logo, status, styles, functionClick }) => {
  return (
    <header>
      <Link href={'/'} className={styles.logo}>
        <img
            src={logo.data.attributes.Reduccion1.data.attributes.url}
            alt={logo.data.attributes.Reduccion1.data.attributes.alternativeText}
          />
      </Link>
      <div className={status ? `${styles.toggle} ${styles.active}` : styles.toggle} onClick={functionClick}></div>
    </header>
  )
}

export default Menu
