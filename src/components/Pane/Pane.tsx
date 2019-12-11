import React from 'react'

import styles from './Pane.module.css'


export const Pane: React.FC = ({ children }) => (
  <div className={styles.Pane}>
    { children }
  </div>
)
