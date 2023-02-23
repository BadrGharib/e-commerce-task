import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/actions/cart'
import { Product } from '../../types'
import Button from '../FormElements/Button/Button'
import style from './ProductInfo.module.scss'

interface ProductInfoProps {
  product: Product
}
const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const quantityRef = useRef<HTMLInputElement>(null)
  const cartDispatcher = useDispatch()
  const handelAddToCart = () => {
    quantityRef !== null &&
      cartDispatcher(
        addItemToCart({
          productId: product.id,
          quantity: parseInt(quantityRef.current?.value as string),
        }),
      )
  }

  return (
    <div className={style.productInfo}>
      <div className={style.title}>{product.title}</div>
      <div className={style.priceOldPrice}>
        <div className={style.price}>{`$${product.price}`}</div>
        {product.price < product.oldprice && (
          <div className={style.oldPrice}>{`$${product.oldprice}`}</div>
        )}
      </div>
      <div className={style.addNumberToCart}>
        <div>
          <input
            ref={quantityRef}
            className={style.itemCount}
            id="number"
            type="number"
            min={1}
            defaultValue={1}
          />
        </div>
        <Button
          className={style.addToCartBtn}
          inverse={true}
          onClick={handelAddToCart}
        >
          Add To Cart
        </Button>
      </div>
      <div className={style.description}>{product.description} </div>
      <div className={style.category}>{product.catregory}</div>
    </div>
  )
}

export default ProductInfo
