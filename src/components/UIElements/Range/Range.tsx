import { Slider } from '@material-ui/core'
import React, { useEffect } from 'react'
import style from './Range.module.scss'

interface ProductCardProps {
  from: number
  to: number
  min: number
  max: number
  onChange: (from: number, to: number) => void
}
const Range: React.FC<ProductCardProps> = ({
  from,
  to,
  min,
  max,
  onChange,
}) => {
  const [value, setValue] = React.useState<number | number[]>([min, max])
  useEffect(() => {
    setValue([from, to])
  }, [from, to])

  const handelChanged = (
    event: React.ChangeEvent<any>,
    value: number | number[],
  ) => {
    setValue(value)
    Array.isArray(value) && onChange(value[0], value[1])
  }
  return (
    <div className={style.search}>
      <div className={style.title}>PRICE</div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={1}
        onChange={handelChanged}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
      />
    </div>
  )
}

export default Range