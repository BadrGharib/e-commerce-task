import { Cart } from '../../types'

export const ADD_TO_CART = 'cart/ADD_TO_CART'
export const UPDATE_ITEM_IN_CART = 'cart/UPDATE_ITEM_IN_CART'
export const DELETE_ITEM_FROM_CART = 'cart/DELETE_ITEM_FROM_CART'
export const CLEAR_CART = 'cart/CLEAR_CART'
export type CartActions = {
  type: string
  item: Cart
  id?: string
}

export const addItemToCart = (item: Cart) => {
  return {
    type: ADD_TO_CART,
    item,
  }
}
export const updateItemInCart = (item: Cart) => {
  return {
    type: UPDATE_ITEM_IN_CART,
    item,
  }
}
export const deleteItemFromCart = (id: string) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    id,
  }
}
export const ClearCart = () => {
  return {
    type: CLEAR_CART,
  }
}
