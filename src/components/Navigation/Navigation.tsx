import React from 'react'
import style from './Navigation.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { RootState } from '../../store/reducers'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  let itemCount = 0
  Object.values(cart).length > 0 &&
    Object.values(cart).forEach((item) => {
      itemCount += item.quantity
    })
  return (
    <div className={style.navigation}>
      <Link to={`cart`}>
        <div className={style.cartItem}>
          {itemCount > 0 && <div className={style.count}>{itemCount}</div>}
          <FaShoppingCart className={style.cart} />
        </div>
      </Link>
    </div>
  )
}

export default Navigation
