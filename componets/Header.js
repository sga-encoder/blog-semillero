import Link from "next/link"

const Header = ({status, styles, functionClick}) => {
  return (
    <header>
      <Link href={'/'} className={styles.logo}>
        IEGAR INAES
      </Link>
      <div className={status ? `${styles.toggle} ${styles.active}`: styles.toggle} onClick={functionClick}></div>
    </header>
  )
}

export default Header
