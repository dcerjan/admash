import React from 'react'

import { StatRecord } from '../../models/StatRecord'
import styles from './Stat.module.css'
import { Badge } from '../Badge'

export type StatPublicProps = {
  data: StatRecord,
}

const trimZeroes = (numeric: string) => {
  const [before, after] = numeric.split('.')
  const trimmed = after && after.split('0')[0]
  if (trimmed == null || trimmed === '') {
    return before
  } else {

    return `${before}.${trimmed}`
  }
}

export const Stat: React.FC<StatPublicProps> = ({ data }) => (
  <div className={styles.Stat}>
    <div className={styles.StatHeader}>
      <i className={`fa fa-${data.icon}`} />
      { data.name }
    </div>
    <div className={styles.StatBody}>
      { /* it's usually some kind of formatter's responsibility to format data according to some business rules, since this is a mock, this will suffice */ }
      { data.symbolFix === 'prefix' ? <span className={styles.Symbol}>{ data.symbol }</span> : null }
      <span className={styles.Value}>{ trimZeroes(data.value.toFixed(2)) }</span>
      { data.symbolFix === 'postfix' ? <span className={styles.Symbol}>{ data.symbol }</span> : null }

      <div className={styles.BadgePosition}>
        <Badge delta={data.delta} sign={data.sign}/>
      </div>
    </div>
  </div>
)
