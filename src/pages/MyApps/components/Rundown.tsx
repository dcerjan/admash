import React from 'react'

import styles from './Rundown.module.css'
import { AppEntry } from '../../../components/AppEntry'
import { Button } from '../../../components/Button'


const mockData = [
  { id: 1, project: 'Potato Salad' },
  { id: 2, project: 'Tomato Soup' },
  { id: 3, project: 'A Brick' }
]

export const Rundown: React.FC = () => (
  <div className={styles.Rundown}>
    <div className={styles.Header}>
      <div className={styles.Title}>my apps</div>
      <Button icon='filter' />
    </div>
    { mockData.map(({ id, project }) =>
      <AppEntry key={id}>{project}</AppEntry>) }
  </div>
)
