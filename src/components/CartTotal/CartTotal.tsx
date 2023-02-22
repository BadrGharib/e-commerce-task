import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ClearCart } from '../../store/actions/cart'
import { RootState } from '../../store/reducers'
import Button from '../FormElements/Button/Button'
import style from './CartTotal.module.scss'

const CartTotal: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const products = useSelector((state: RootState) => state.products.products)
  const cartDispatcher = useDispatch()
  const navigate = useNavigate()

  let totalPrice = 0
  Object.values(cart).length > 0 &&
    Object.values(cart).forEach((item) => {
      totalPrice += item.quantity * products[item.productId].price
    })
  const handelProceed = () => {
    cartDispatcher(ClearCart())
    navigate('/')
  }
  return (
    <div className={style.CartTotal}>
      <div className={style.mainTitle}>
        CART <div style={{ width: '20px' }} />
        TOTAL
      </div>
      <div className={style.row}>
        <div className={style.title}>SUBTOTAL</div>
        <div>{totalPrice}</div>
      </div>
      <div className={style.row}>
        <div className={style.title}>SHPPING</div>
        <div>
          <input
            className={style.input}
            placeholder="Enter Your ddress To View Chipping Options."
          />
          <div className={style.title}>Calculate Shpping</div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.title}>TOTAL</div>
        <div>{totalPrice}</div>
      </div>
      <Button className={style.proceedBtn} onClick={handelProceed}>
        PROCEED TO CHECKOUT
      </Button>
    </div>
  )
}

export default CartTotal
