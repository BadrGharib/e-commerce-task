import { Product } from '../../types'

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export type ProductsActions = {
  type: string
  products: { [key: string]: Product }
}

export const receiveAllProducts = (products: { [key: string]: Product }) => {
  return {
    type: RECEIVE_PRODUCTS,
    products,
  }
}
