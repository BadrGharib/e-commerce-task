import React from 'react'
import style from './Button.module.scss'

type ButtonProps = React.ComponentProps<'button'> & {
  inverse?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  // eslint-disable-next-line react/prop-types
  className,
  inverse,
  ...props
}) => {
  return (
    <button
      className={`${!inverse ? style.button : style.buttonRevers} ${
        className ?? ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
