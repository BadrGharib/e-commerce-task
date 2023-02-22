import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart } from '../../store/actions/cart'
import { Product } from '../../types'
import Button from '../FormElements/Button/Button'
import style from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cartDispatcher = useDispatch()
  const handelAddToCardClicked = () => {
    cartDispatcher(
      addItemToCart({
        productId: product.id,
        quantity: 1,
      }),
    )
  }
  return (
    <div className={style.product}>
      <div className={style.imgBtn}>
        <Link
          to={`products/${product.id}`}
          style={{ width: '100%', height: '100%' }}
        >
          <img className={style.img} src={product.imgs[0]} />
        </Link>
        {product.price < product.oldprice && (
          <div className={style.sale}>Sale</div>
        )}
        <Button className={style.addToCartBtn} onClick={handelAddToCardClicked}>
          Add To Cart
        </Button>
      </div>
      <div className={style.title}>{product.title}</div>
      <div className={style.category}>{product.catregory}</div>
      <div className={style.priceOldPrice}>
        <div className={style.price}>{`$${product.price}`}</div>
        {product.price < product.oldprice && (
          <div className={style.oldPrice}>{`$${product.oldprice}`}</div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
