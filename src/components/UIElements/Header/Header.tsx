import React from 'react'
import style from './Header.module.scss'

interface HeaderProps {
  title: string
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={style.header}>
      <div className={style.title}>{title}</div>
    </div>
  )
}

export default Header
