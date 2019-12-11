import clsx from 'clsx'
import React from 'react'
import ReactSelect, { Props } from 'react-select'

import styles from './Select.module.css'


export type SelectOption = {
  value: string,
  label: string,
}

type SelectPublicProps = Props<SelectOption>

export const Select: React.FC<SelectPublicProps> = (props) => (
  <ReactSelect
    {...props}
    className={clsx(styles.Select, props.className)}
  />
)
