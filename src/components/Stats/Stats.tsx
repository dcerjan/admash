import React from 'react'

import { Pane } from '../Pane'
import { Stat } from './Stat'

import { StatRecord } from '../../models/StatRecord'
import styles from './Stats.module.css'


const mock: StatRecord[] = [{
  id: 1,
  icon: 'bar-chart',
  name: 'revenue',
  symbolFix: 'prefix',
  symbol: '$',
  value: 510,
  delta: 12,
  sign: +1,
}, {
  id: 2,
  icon: 'bolt',
  name: 'impressions',
  symbolFix: 'postfix',
  symbol: 'M',
  value: 12.2,
  delta: 12,
  sign: +1,
}, {
  id: 3,
  icon: 'star-half-o',
  name: 'fill rate',
  symbolFix: 'postfix',
  symbol: '%',
  value: 37.5,
  delta: 4,
  sign: +1,
}, {
  id: 4,
  icon: 'line-chart',
  name: 'ecpm',
  symbolFix: 'prefix',
  symbol: '%',
  value: 2.7,
  delta: 5,
  sign: -1,
}]

export const Stats: React.FC = () => (
  <Pane>
    <div className={styles.StatsWrapper}>
      { mock.map((data) => <Stat key={data.id} data={data} />)}
    </div>
    <div className={styles.Expander}>
      view all data
      <i className='fa fa-chevron-down'/>
    </div>
  </Pane>
)
