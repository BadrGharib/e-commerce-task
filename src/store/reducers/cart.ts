/* eslint-disable no-case-declarations */
import { v4 as uuid } from 'uuid'
import { Cart } from '../../types'
import {
  CartActions,
  ADD_TO_CART,
  UPDATE_ITEM_IN_CART,
  DELETE_ITEM_FROM_CART,
  CLEAR_CART,
} from '../actions/cart'

const intialState: { cart: { [key: string]: Cart } } = {
  cart: {},
}
export default function cart(state = intialState, action: CartActions) {
  switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const id = uuid()
      const item = Object.values(state.cart).find(
        (i) => i.productId == action.item.productId,
      )
      if (item) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [item.id as string]: {
              ...item,
              quantity: item.quantity + action.item.quantity,
            },
          },
        }
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: { id, ...action.item },
        },
      }
    case UPDATE_ITEM_IN_CART:
      const oldItem = Object.values(state.cart).find(
        (i) => i.productId == action.item.productId,
      )
      if (oldItem) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [oldItem.id as string]: {
              ...oldItem,
              quantity: action.item.quantity,
            },
          },
        }
      }
      const newid = uuid()
      return {
        ...state,
        cart: {
          ...state.cart,
          [newid]: { id: newid, ...action.item },
        },
      }
    case DELETE_ITEM_FROM_CART:
      const tembCart = { ...state.cart }
      delete tembCart[action.id as string]
      return {
        ...state,
        cart: { ...tembCart },
      }
    case CLEAR_CART:
      return {
        ...state,
        cart: {},
      }
    default:
      return state
  }
}
