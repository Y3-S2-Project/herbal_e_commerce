import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AllItems = React.lazy(() => import('./views/sellerVIews/allItems/AllItems'))
const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'SellerDashboard', element: Dashboard, permissions: 'isSeller' },
  { path: '/dashboard', name: 'BuyerDashboard', element: Dashboard, permissions: 'isBuyer' },
  {
    path: '/item-management/all-items',
    name: 'AllItems',
    element: AllItems,
    permissions: 'isBuyer',
  },
]

export default routes
