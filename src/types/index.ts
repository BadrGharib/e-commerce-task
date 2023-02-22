export type Product = {
  id: string
  title: string
  catregory: string
  price: number
  oldprice: number
  description: string
  imgs: string[]
}
export type Cart = {
  id?: string
  productId: string
  quantity: number
}
