import clsx from 'clsx'
import React from 'react'

import styles from './Stat.module.css'

export type StatData = {
  id: number,
  icon: string
  name: string
  symbolFix: 'prefix' | 'postfix'
  symbol: string
  value: number
  delta: number
  sign: -1 | 0 | 1
}

export type StatPublicProps = {
  data: StatData,
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

      <div className={clsx({ [styles.Badge]: true, [styles.Red]: data.delta * data.sign < 0, [styles.Green]: data.delta * data.sign > 0 })}>
        { `${data.delta >= 0 ? '+' : ''}${data.delta.toFixed(0)}%` }
      </div>
    </div>
  </div>
)
