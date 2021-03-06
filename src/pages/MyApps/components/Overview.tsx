import React from 'react'

import { Stats } from '../../../components/Stats'
import { Select } from '../../../components/Select'

import styles from './Overview.module.css'
import { SelectOption } from '../../../components/Select/Select'


const mockOptions: SelectOption[] = [
  { value: '1', label: 'First' },
  { value: '2', label: 'Second' },
  { value: '3', label: 'Third' },
]

export const Overview: React.FC = () => (
  <div className={styles.Overview}>
    <div className={styles.Header}>
      <div className={styles.Title}>overview</div>
      <Select
        options={mockOptions}
        placeholder='Select Data'
        isClearable
      />
    </div>
    <Stats />
  </div>
)
