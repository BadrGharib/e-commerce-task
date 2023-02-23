/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import style from './Button.module.scss'

type ButtonProps = React.ComponentProps<'button'> & {
  inverse?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
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
