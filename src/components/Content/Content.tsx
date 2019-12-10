import React from 'react'

import styles from './Content.module.css'

export const Content: React.FC = ({ children }) => (
  <div className={styles.Content}>
    { children }
  </div>
)