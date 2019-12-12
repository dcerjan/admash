import React from 'react'

import styles from './Rundown.module.css'
import { AppEntry } from '../../../components/AppEntry'
import { Button } from '../../../components/Button'
import { AppEntryRecord, Environment } from '../../../models/AppEntryRecord'


const mockData: AppEntryRecord[] = [
  { id: 1, platform: 'unity', name: 'TrackDemoAWE', earnedAmount: 224, delta: 16, environment: Environment.Sandbox },
  { id: 2, platform: 'unity', name: 'RacingDemoAdmix-2', earnedAmount: 224, delta: 16, environment: Environment.Off },
  { id: 3, platform: 'unity', name: 'TrackDemoAWE', earnedAmount: 224, delta: 16, environment: Environment.Live },
  { id: 4, platform: 'unity', name: 'RacingDemoAdmix2', earnedAmount: 224, delta: 16, environment: Environment.Sandbox },
  { id: 5, platform: 'unity', name: 'RacingDemoAdmix', earnedAmount: 224, delta: 16, environment: Environment.Live }
]

export const Rundown: React.FC = () => (
  <div className={styles.Rundown}>
    <div className={styles.Header}>
      <div className={styles.Title}>my apps</div>
      <Button icon='filter' />
    </div>
    { mockData.map((app) => <AppEntry key={app.id} data={app} />) }
  </div>
)
