import React from 'react'
import style from './CartPage.module.scss'
import CartTotal from '../../components/CartTotal/CartTotal'
import CartItems from '../../components/CartItems/CartItems'
import Header from '../../components/UIElements/Header/Header'

const CartPage: React.FC = () => {
  return (
    <>
      <Header title="CART" />
      <div className={style.CartPage}>
        <CartItems />
        <CartTotal />
      </div>
    </>
  )
}

export default CartPage
