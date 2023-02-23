import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import style from './App.module.scss'
import Spinner from './components/UIElements/Spinner/Spinner'
import MainPage from './pages/MainPage/MainPage'
const ProductsPage = React.lazy(
  async () => await import('./pages/ProductsPage/ProductsPage'),
)
const ProductDetails = React.lazy(
  async () => await import('./pages/ProductDetails/ProductDetails'),
)
const CartPage = React.lazy(
  async () => await import('./pages/CartPage/CartPage'),
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>No Page Found</div>,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
        errorElement: <div>No Page Found</div>,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
        errorElement: <div>No Page Found</div>,
      },
      {
        path: '/cart',
        element: <CartPage />,
        errorElement: <div>No Page Found</div>,
      },
    ],
  },
])
const App: React.FC = () => {
  return (
    <div className={style.app}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
