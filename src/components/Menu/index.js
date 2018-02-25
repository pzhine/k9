import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { connect } from 'react-redux'
import styles from './styles.scss'
import data from '../../content/menu.json'
import actions from '../../redux/app/actions'

import HamburgerIcon from '../../icons/hamburger.svg'

const onClick = ({ e, toggleMenuIsActive }) => {
  const { target } = e
  if (target.tagName.toLowerCase() === 'a' && target.id !== 'hamburger') {
    if (window.location.href.match(target.href)) {
      setTimeout(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 100)
    }
    toggleMenuIsActive(false)
  }
}

const Menu = ({ toggleMenuIsActive, app }) =>
  <div
    className={cx(styles.menu, { [styles.isActive]: app.menuIsActive })}
    onClick={e => app.menuIsActive && onClick({ e, toggleMenuIsActive })}
  >
    <button
      onClick={e => {
        e.stopPropagation()
        toggleMenuIsActive(!app.menuIsActive)
      }}
      id="hamburger"
      className={styles.hamburger}
    >
      <HamburgerIcon />
    </button>
    <div className={styles.container}>
      {data.map(
        item =>
          item.path
            ? <Link to={item.path} key={item.path}>
                {item.title}
              </Link>
            : <a href={item.url} target="_blank" key={item.url}>
                {item.title}
              </a>
      )}
    </div>
  </div>

export default connect(state => state, actions)(Menu)
