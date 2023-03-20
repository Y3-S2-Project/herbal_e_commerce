import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'Seller', element: Dashboard, permissions: 'isSeller' },
  { path: '/dashboard', name: 'Buyer', element: Dashboard, permissions: 'isBuyer' },
]

export default routes
