import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Products = React.lazy(() => import('./views/products/sellerVIews/productManagement/Products'))
const AdminProductsView = React.lazy(() =>
  import('./views/products/adminViews/productManagement/AdminProductsView'),
)
const OrderAdminView = React.lazy(() => import('./views/orderAdmin/OrderAdminView'))
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
  {
    path: '/product-management/products',
    name: 'Products',
    element: AdminProductsView,
    permissions: 'isAdmin',
  },
  {
    path: '/adminorder',
    name: 'OrderAdminView',
    element: OrderAdminView,
    permissions: 'isAdmin',
  },
]

export default routes
