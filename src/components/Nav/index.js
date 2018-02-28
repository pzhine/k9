import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import styles from './styles.scss'
import { siteTitle } from '../../content/config.json'
import Menu from '../Menu'
import LogoIcon from '../../icons/logo.svg'
import DogIcon from '../../icons/dog.svg'

const Nav = ({ menuIsActive }) =>
  <div className={styles.nav}>
    <div
      className={cx(styles.content, {
        [styles.menuIsActive]: menuIsActive,
      })}
    >
      <Link to="/" className={styles.logo} alt={siteTitle}>
        <LogoIcon />
      </Link>
      <div className={styles.mascot}>
        <DogIcon />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  </div>

export default connect(state => ({
  menuIsActive: state.app.menuIsActive,
}))(Nav)
