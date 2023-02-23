import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { FaTimes } from 'react-icons/fa'
import { Product } from '../../types'
import { deleteItemFromCart, updateItemInCart } from '../../store/actions/cart'
import style from './CartItems.module.scss'

const CartItems: React.FC = () => {
  const quantityRef = useRef<HTMLInputElement>(null)
  const cartDispatcher = useDispatch()
  const products = useSelector((state: RootState) => state.products.products)
  const cart = useSelector((state: RootState) => state.cart.cart)
  const handelDelete = (id: string) => {
    cartDispatcher(deleteItemFromCart(id))
  }
  const handelQuantityChange = (value: string, product: Product) => {
    cartDispatcher(
      updateItemInCart({
        productId: product.id,
        quantity: parseInt(value as string),
      }),
    )
  }
  return (
    <div className={style.CartItems}>
      {Object.keys(cart).length > 0 && (
        <>
          <div className={style.rowHeader}>
            <div className={style.cell}></div>
            <div className={style.cell}></div>
            <div className={style.cell}>PRODUCT</div>
            <div className={style.cell}>PRICE</div>
            <div className={style.cell}>QUANTITY</div>
            <div className={style.cell}>SUBTOTAL</div>
          </div>
          {Object.values(cart).map((item) => {
            return (
              <div key={item.id} className={style.rowItem}>
                <div className={style.cell}>
                  <FaTimes
                    className={style.close}
                    onClick={() => handelDelete(item.id as string)}
                  />
                </div>
                <div className={style.imgCell}>
                  <img
                    src={products[item.productId].imgs[0]}
                    className={style.img}
                  />
                </div>
                <div className={style.cell}>
                  <div className={style.title}>PRODUCT</div>
                  {products[item.productId].title}
                </div>
                <div className={style.cell}>
                  <div className={style.title}>PRICE</div>
                  {products[item.productId].price}
                </div>
                <div className={style.cell}>
                  <div className={style.title}>QUANTITY</div>
                  <input
                    ref={quantityRef}
                    className={style.quantity}
                    id="number"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      handelQuantityChange(
                        e.target.value,
                        products[item.productId],
                      )
                    }
                  />
                </div>

                <div className={style.cell}>
                  <div className={style.title}>SUBTOTAL</div>
                  {item.quantity * products[item.productId].price}
                </div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

export default CartItems
