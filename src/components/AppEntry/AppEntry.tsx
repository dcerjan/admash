import React from 'react'

import { Pane } from '../Pane'
import styles from './AppEntry.module.css'

export const AppEntry: React.FC = () => (
  <Pane>
    <div className={styles.AppEntry}>
      #TODO
    </div>
  </Pane>
)