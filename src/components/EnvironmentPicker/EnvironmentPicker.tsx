import clsx from 'clsx'
import React from 'react'

import { Environment } from '../../models/AppEntryRecord'
import styles from './EnvironmentPicker.module.css'

type EnvironmentPickerPublicProps = {
  env: Environment
}

export const EnvironmentPicker: React.FC<EnvironmentPickerPublicProps> = ({ env }) => (
  <div className={clsx(styles.EnvironmentPicker)}>
    <div className={clsx(styles.Off, env === Environment.Off && styles.Active)}>{Environment.Off}</div>
    <div className={clsx(styles.Sandbox, env === Environment.Sandbox && styles.Active)}>{Environment.Sandbox}</div>
    <div className={clsx(styles.Live, env === Environment.Live && styles.Active)}>{Environment.Live}</div>
  </div>
)
