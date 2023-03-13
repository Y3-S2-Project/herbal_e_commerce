import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))



const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Company Route
  { path: '/dashboard', name: 'Company', element: Dashboard, permissions: 'isCompany' },


 
]

export default routes
