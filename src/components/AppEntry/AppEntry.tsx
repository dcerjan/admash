import React from 'react'

import { AppEntryRecord } from '../../models/AppEntryRecord'
import { Pane } from '../Pane'
import { Button } from '../Button'
import styles from './AppEntry.module.css'
import { Badge } from '../Badge'
import { EnvironmentPicker } from '../EnvironmentPicker'
import { Hamburger } from '../Hamburger'

type AppEntryPublicProps = {
  data: AppEntryRecord
}

const getPlatformIcon = (_platform: string) => 'cube'

export const AppEntry: React.FC<AppEntryPublicProps> = ({ data }) => (
  <Pane>
    <div className={styles.AppEntry}>
      <div className={styles.Platform}>
        <i className={`fa fa-${getPlatformIcon(data.platform)}`} />
      </div>
      <div className={styles.Name}>
        { data.name }
      </div>
      <div className={styles.Earnings}>
        { `$${data.earnedAmount.toFixed(2)}` }
        <Badge delta={data.delta} sign={+1} />
      </div>
      <div className={styles.Actions}>
        <Button inverted icon='cog' />
        <Button inverted icon='info-circle' />
        <Button inverted icon='bar-chart' />
      </div>
      <div className={styles.Environment}>
        <EnvironmentPicker env={data.environment} />
      </div>
      <div className={styles.Hamburger}>
        <Hamburger />
      </div>
    </div>
  </Pane>
)