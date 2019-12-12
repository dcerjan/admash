import React from 'react'

import styles from './Hamburger.module.css'


export const Hamburger: React.FC = () => (
  <div className={styles.Hamburger}>
    <i className={`fa fa-ellipsis-h`} />
  </div>
)
