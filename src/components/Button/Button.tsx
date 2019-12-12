import clsx from 'clsx'
import React from 'react'

import styles from './Button.module.css'

type ButtonPublicProps = {
  icon?: string
  text?: string
  inverted?: boolean
  // and of course, onClick and friends
}

export const Button: React.FC<ButtonPublicProps> = ({ icon, text, inverted }) => (
  <div className={clsx({ [styles.Button]: true, [styles.Inverted]: inverted})}>
    { icon != null ? <i className={`fa fa-${icon}`} /> : null }
    { text != null ? text : null }
  </div>
)
