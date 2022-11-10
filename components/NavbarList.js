import Link from 'next/link'
import React from 'react'

const NavbarList = ({ styles }) => {
  return (
    <ul className={styles}>
          <li style={{ '--i': 1 }}>
            <Link href="/">
              Hogar
            </Link>
          </li>

          <li style={{ '--i': 2 }}>
            <Link href="/blog">
              Blog
            </Link>
          </li>

          <li style={{ '--i': 3 }}>
            <Link href="/quienes-somos">
              Quienes Somos
            </Link>
          </li>

          <li style={{ '--i': 4 }}>
            <Link href="/que-hacemos">
              Que hacemos
            </Link>
      </li>

      <li style={{ '--i': 5 }}>
            <Link href="/galeria">
              Galeria
            </Link>
            </li>

      <li style={{ '--i': 6 }}>
            <Link href="/mapa">
              Mapa
            </Link>
            </li>

    </ul>
  )
}

export default NavbarList
