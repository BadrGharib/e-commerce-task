import React from 'react'
import style from './Search.module.scss'

interface ProductCardProps {
  onChange: (txt: string) => void
  placeholder?: string
}
const Search: React.FC<ProductCardProps> = ({ onChange, placeholder }) => {
  return (
    <div className={style.search}>
      <div className={style.title}>SEARCH</div>
      <input
        className={style.input}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search
