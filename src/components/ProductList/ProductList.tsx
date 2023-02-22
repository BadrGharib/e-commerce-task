import React from 'react'
import { Product } from '../../types'
import ProductCard from '../ProductCard/ProductCard'
import style from './ProductList.module.scss'

interface ProductListProps {
  products: Product[]
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={style.productList}>
      {products.map((product) => {
        return (
          <div className={style.item} key={product.id}>
            <ProductCard product={product} />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
