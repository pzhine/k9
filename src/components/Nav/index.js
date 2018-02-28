import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import { siteTitle } from '../../content/config.json'

import LogoIcon from '../../icons/logo.svg'
import DogIcon from '../../icons/dog.svg'

const Nav = () =>
  <div className={styles.nav}>
    <div className={styles.content}>
      <Link to="/" className={styles.logo} alt={siteTitle}>
        <LogoIcon />
      </Link>
      <div className={styles.mascot}>
        <DogIcon />
      </div>
    </div>
  </div>

export default Nav
