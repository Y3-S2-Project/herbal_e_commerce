import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const AdminCompanyPayment = React.lazy(() =>
  import('./views/payment-administration/admin-company-payments/AdminCompanyPayments'),
)
const AdminCustomerPayment = React.lazy(() =>
  import('./views/payment-administration/admin-customer-payments/AdminCustomerPayments'),
)

const NewPickupReq = React.lazy(() => import('./views/pickupReq/newPickupReq/NewPickupReq'))

const AllPickupReq = React.lazy(() => import('./views/pickupReq/allPickupReq/AllPickupReq'))

const Payment = React.lazy(() => import('./views/company-payment/payment/Payment'))
const AddPaymentMethod = React.lazy(() =>
  import('./views/company-payment/addPaymentMethod/AddPaymentMethod'),
)
const CompanyPickupReq = React.lazy(() =>
  import('./views/pickupReq/companyPickupReq/CompanyPickupReq'),
)
const BinList = React.lazy(() => import('./views/bin/BinList'))

const ViewOnePayment = React.lazy(() => import('./components/veiwonepayment/ViewOnePayment'))
const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Company Route
  { path: '/dashboard', name: 'Company', element: Dashboard, permissions: 'isCompany' },
  { path: '/payment', name: 'Payment', element: Payment, permissions: 'isCompany' },

  {
    path: '/payment/viewonepayment/:id',
    name: 'ViewOnePayment',
    element: ViewOnePayment,
    permissions: 'isCompany',
  },
  {
    path: '/payment/update-payment/:id',
    name: 'Update Payment Method',
    element: AddPaymentMethod,
    permissions: 'isCompany',
  },
  {
    path: '/payment/add-payment-method',
    name: 'Add Payment Method',
    element: AddPaymentMethod,
    permissions: 'isCompany',
  },
  { path: '/requests', name: 'Requests', element: CompanyPickupReq, permissions: 'isCompany' },
  { path: '/bins', name: 'Bin List', element: BinList, permissions: 'isCompany' },

  //Customer Route
  { path: '/dashboard', name: 'Customer', element: Dashboard, permissions: 'isCustomer' },
  {
    path: '/new-pickup-request',
    name: 'New Pickup Request',
    element: NewPickupReq,
    permissions: 'isCustomer',
  },
  {
    path: '/my-request',
    name: 'My Pickup Request',
    element: AllPickupReq,
    permissions: 'isCustomer',
  },

  //Admin Route
  { path: '/dashboard', name: 'Dashboard', element: Dashboard, permissions: 'isAdmin' },
  {
    path: '/admin-customer-payments',
    name: 'AdminCustomerPayment',
    element: AdminCustomerPayment,
    permissions: 'isAdmin',
  },
  {
    path: '/admin-company-payments',
    name: 'AdminCustomerPayment',
    element: AdminCompanyPayment,
    permissions: 'isAdmin',
  },
  {
    path: '/admin-customer-payments/viewonepayment/:id',
    name: 'ViewOnePayment',
    element: ViewOnePayment,
    permissions: 'isAdmin',
  },
  {
    path: '/admin-company-payments/viewonepayment/:id',
    name: 'ViewOnePayment',
    element: ViewOnePayment,
    permissions: 'isAdmin',
  },
]

export default routes
