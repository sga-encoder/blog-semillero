import { React } from 'react'
import styles from '../styles/Blog.module.css'

const MDXComponents = {
  h1: (props) => <h1 className={styles.h1} {...props}></h1>,
  h2: (props) => <h2 className={styles.h2} {...props}></h2>,
  h3: (props) => <h3 className={styles.h3} {...props}></h3>,
  h4: (props) => <h4 className={styles.h4} {...props}></h4>,
  h5: (props) => <h5 className={styles.h5} {...props}></h5>,
  h6: (props) => <h6 className={styles.h6} {...props}></h6>,
  p: (props) => <p className={styles.p} {...props}></p>

}

export default MDXComponents
