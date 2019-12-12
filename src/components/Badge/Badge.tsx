import clsx from 'clsx'
import React from 'react'

import styles from './Badge.module.css'


type BadgePublicProps = {
  delta: number,
  sign: -1 | 0 | 1
}

export const Badge: React.FC<BadgePublicProps> = ({ delta, sign }) => (
  <div className={clsx({ [styles.Badge]: true, [styles.Red]: delta * sign < 0, [styles.Green]: delta * sign > 0 })}>
    { `${delta >= 0 ? '+' : ''}${delta.toFixed(0)}%` }
  </div>
)