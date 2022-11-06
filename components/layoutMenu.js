import React from 'react'
import Menu from './Menu'
import NavbarList from './NavbarList'
import styles from '../styles/home/Header.module.css'

const LayoutMenu = ({ children, status, statusFunction, logo }) => {
  return (
    <>
      <Menu status={status} styles={styles} functionClick={() => { statusFunction(!status) }} logo={logo} />
      <main>{children}</main>
      <NavbarList styles={styles.navigation}/>
    </>
  )
}

export default LayoutMenu
