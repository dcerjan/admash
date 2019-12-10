import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.css'

type AllowedIcons =
  | 'window-maximize'
  | 'pie-chart'
  | 'file'
  | 'download'
  | 'user'

type NavPublicProps = {
  to: string
  icon: AllowedIcons
  label: string
}

const preventDragHandler = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
  event.preventDefault();
}

export const Nav: React.FC<NavPublicProps> = ({ to, icon, label }) => (
  <NavLink
    className={styles.Nav}
    activeClassName={styles.Active}
    to={to}
    onDragStart={preventDragHandler}
  >
    <i className={`fa fa-${icon}`} />
    {label}
  </NavLink>
)
