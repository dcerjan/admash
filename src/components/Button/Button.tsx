import React from 'react'

import styles from './Button.module.css'

type ButtonPublicProps = {
  icon?: string
  text?: string
  // and of course, onClick and friends
}

export const Button: React.FC<ButtonPublicProps> = ({ icon, text }) => (
  <div className={styles.Button}>
    { icon != null ? <i className={`fa fa-${icon}`} /> : null }
    { text != null ? text : null }
  </div>
)
