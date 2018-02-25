import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import { siteTitle } from '../../content/config.json'

import Menu from '../Menu'

const Nav = () =>
  <div className={styles.nav}>
    <div className={styles.content}>
      <Link to="/" className={styles.logo}>
        <h1>
          {siteTitle}
        </h1>
      </Link>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  </div>

export default Nav
