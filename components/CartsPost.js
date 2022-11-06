import React from 'react'
import Link from 'next/link'

const CartsPost = ({ styles, path, title, description, img, alternativeText }) => {
  return (
    <Link href={`/blog/${path}`} className={styles.card}>
      <div>
        <div className={styles.card_content}>
          <h2>{ title }</h2>
          <p>{description}</p>
        </div>
        <div className={styles.glass}></div>

        <div className={styles.back}>
          <img src={img} alt={alternativeText} />
        </div>

        <p className={styles.right}>PH: {alternativeText}</p>

      </div>
    </Link>
  )
}

export default CartsPost
