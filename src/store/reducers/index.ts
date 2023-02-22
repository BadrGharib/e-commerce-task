import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'

const allreducers = combineReducers({
  products,
  cart,
})
export type RootState = ReturnType<typeof allreducers>
export default allreducers
