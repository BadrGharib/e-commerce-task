import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import style from './MainPage.module.scss'

const MainPage: React.FC = () => {
  return (
    <div className={style.main}>
      <Navigation />
      <div className={style.container}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainPage
