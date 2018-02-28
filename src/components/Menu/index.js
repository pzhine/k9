import React from 'react'
import { Link, matchPath, withRouter } from 'react-router-dom'
import cx from 'classnames'
import { connect } from 'react-redux'
import styles from './styles.scss'
import actions from '../../redux/app/actions'
import config from '../../content/config.json'
import dictionaries from '../../../dictionaries'

import BackIcon from '../../icons/back.svg'

const Menu = ({ toggleMenuIsActive, menuIsActive, location, className }) => {
  let currentLang = config.dictionary
  const match = matchPath(location.pathname, '/:dict')
  if (match) {
    currentLang = match.params.dict
  }
  return (
    <div
      className={cx(styles.menu, className, {
        [styles.isActive]: menuIsActive,
      })}
      onClick={() => menuIsActive && toggleMenuIsActive(false)}
    >
      <button
        onClick={e => {
          e.stopPropagation()
          toggleMenuIsActive(!menuIsActive)
        }}
        className={styles.hamburger}
      >
        <span>
          {dictionaries[currentLang]}
        </span>
        <BackIcon />
      </button>
      <div className={styles.container}>
        {Object.keys(dictionaries)
          .filter(lang => lang !== currentLang)
          .sort()
          .map(lang =>
            <Link to={`/${lang}`} key={lang}>
              {dictionaries[lang]}
            </Link>
          )}
      </div>
    </div>
  )
}

export default withRouter(
  connect(
    state => ({
      menuIsActive: state.app.menuIsActive,
    }),
    actions
  )(Menu)
)
