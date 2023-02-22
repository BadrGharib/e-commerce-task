import React, { useState } from 'react'
import style from './Carousel.module.scss'

interface ProductCardProps {
  imgs: string[]
}
const Carousel: React.FC<ProductCardProps> = ({ imgs }) => {
  const [selectedImg, setselectedImg] = useState<string>(imgs[0])
  const handelSideImgClick = (imgSrc: string) => {
    setselectedImg(imgSrc)
  }
  return (
    <div className={style.carousel}>
      <div className={style.sideList}>
        {imgs.map((image, index) => {
          return (
            <img
              key={index}
              className={style.sideImg}
              src={image}
              onClick={() => handelSideImgClick(image)}
            />
          )
        })}
      </div>
      <div className={style.mainImgContainer}>
        <img className={style.mainImg} src={selectedImg} />
      </div>
    </div>
  )
}

export default Carousel
