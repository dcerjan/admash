import React from 'react'

import styles from './Menu.module.css'

export const Menu: React.FC = ({ children }) => (
  <nav className={styles.Menu}>
    <div className={styles.Vendor}>
      <i className='fa fa-cube' />
      Vendor
    </div>
    { children }
  </nav>
)
