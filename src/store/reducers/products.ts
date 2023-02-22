import { ProductsActions, RECEIVE_PRODUCTS } from '../actions/products'
import { allProducts } from '../../utils/data'

const intialState = {
  products: allProducts,
}
export default function products(state = intialState, action: ProductsActions) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }
    default:
      return state
  }
}
