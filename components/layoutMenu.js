import React from 'react'
import Menu from './Menu'
import NavbarList from './NavbarList'
import styles from '../styles/home/Header.module.css'
import Footer from './Footer'

const LayoutMenu = ({ children, status, statusFunction, logo, title }) => {
  return (
    <>
      <Menu status={status} styles={styles} functionClick={() => { statusFunction(!status) }} logo={logo} title={title} />
      <main>{children}</main>
      <NavbarList styles={styles.navigation} />
      <Footer />
    </>
  )
}

export default LayoutMenu
