import React, { useState } from 'react'
import style from './ProductsPage.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import ProductList from '../../components/ProductList/ProductList'
import Search from '../../components/UIElements/Search/Search'
import Range from '../../components/UIElements/Range/Range'

const ProductsPage: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const [searchTxt, setsearchTxt] = useState<string>('')
  const [priceRange, setpriceRange] = useState<{ from: number; to: number }>({
    from: 0,
    to: 250,
  })
  const onSearchChanged = (txt: string) => {
    setsearchTxt(txt)
  }
  const onRangeChanged = (from: number, to: number) => {
    setpriceRange({ from, to })
  }
  let filterProducts = Object.values(products).filter(
    (p) => p.price >= priceRange.from && p.price <= priceRange.to,
  )
  filterProducts =
    searchTxt !== ''
      ? filterProducts.filter((p) =>
          p.title.toLocaleLowerCase().includes(searchTxt),
        )
      : filterProducts
  return (
    <div className={style.productsPage}>
      <ProductList products={filterProducts} />
      <div className={style.filters}>
        <div className={style.search}>
          <Search
            onChange={onSearchChanged}
            placeholder="Search For Aproduct"
          />
        </div>
        <Range from={80} to={250} min={0} max={300} onChange={onRangeChanged} />
      </div>
    </div>
  )
}

export default ProductsPage
