import React, { useState } from 'react'
import { Product } from '../../types'
import ProductCard from '../ProductCard/ProductCard'
import style from './ProductList.module.scss'

interface ProductListProps {
  products: Product[]
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [sortValue, setsortValue] = useState('defaultSorting')
  const handelSortChange = (value: string) => {
    setsortValue(value)
  }
  const sortProduct =
    sortValue === 'defaultSorting'
      ? products
      : [...products].sort((a, b) => {
          return a.price - b.price
        })
  return (
    <div className={style.productList}>
      <div className={style.sort}>
        <select
          className={style.sortSelect}
          onChange={(e) => handelSortChange(e.target.value)}
          id="cars"
          name="cars"
          defaultValue={sortValue}
        >
          <option value="defaultSorting">Default Sorting</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className={style.products}>
        {sortProduct.map((product) => {
          return (
            <div className={style.item} key={product.id}>
              <ProductCard product={product} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
