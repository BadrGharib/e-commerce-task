import React from 'react'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import Carousel from '../../components/UIElements/Carousel/Carousel'
import style from './ProductDetails.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import Header from '../../components/UIElements/Header/Header'

const ProductDetails: React.FC = () => {
  const { id } = useParams()
  const products = useSelector((state: RootState) => state.products.products)
  if (!id) {
    return <div>{`this product doesn't exist`}</div>
  }
  const selectedProduct = products[id]

  return (
    <>
      <Header title={selectedProduct.title} />
      <div className={style.ProductDetails}>
        <div className={style.imgsCarousel}>
          <Carousel imgs={selectedProduct.imgs} />
        </div>
        <div className={style.productInfo}>
          <ProductInfo product={selectedProduct} />
        </div>
      </div>
    </>
  )
}

export default ProductDetails
