import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Products = React.lazy(() => import('./views/products/sellerVIews/productManagement/Products'))
const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'SellerDashboard', element: Dashboard, permissions: 'isSeller' },
  { path: '/dashboard', name: 'BuyerDashboard', element: Dashboard, permissions: 'isBuyer' },
  {
    path: '/product-management/products',
    name: 'Products',
    element: Products,
    permissions: 'isSeller',
  },
]

export default routes
