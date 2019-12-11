import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'

import styles from './ContentSwitch.module.css'

export const ContentSwitch: React.FC = ({ children }) => (
  <div className={styles.Content}>
    <AnimatedSwitch
      atActive={{ opacity: 1.0 }}
      atLeave={{ opacity: 0.0 }}
      atEnter={{ opacity: 0.0 }}
      className={styles.ContentTransitionWrapper}
    >
      { children }
    </AnimatedSwitch>
  </div>
)