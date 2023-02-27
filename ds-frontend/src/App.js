import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './views/common/login/LoginPage'
import Spinner from 'react-bootstrap/Spinner'
import Landing from './views/common/landing/Landing'
import Unauthorized from './views/common/unauthorized/Unauthorized'
import RegistrationIntro from './views/common/registration-intro/RegistrationIntro'
import BuyerRegister from './views/common/buyerRegister/BuyerRegister'
import SellerRegister from './views/common/sellerRegister/SellerRegister'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoutes from './ProtectedRoutes'

const loading = (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
)

const AdminLayout = React.lazy(() => import('./layout/AdminLayout'))
const UserLayout = React.lazy(() => import('./layout/UserLayout'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" name="Landing" element={<Landing />} />
          <Route path="/unauthorized" name="Unauthorized" element={<Unauthorized />} />
          <Route path="/login" name="Login" element={<Login />} />
          <Route path="/registration-intro" name="Reg-intro" element={<RegistrationIntro />} />
          <Route path="/buyer-registration" name="BuyerRegister" element={<BuyerRegister />} />
          <Route path="/seller-registration" name="SellerRegister" element={<SellerRegister />} />
          <Route element={<ProtectedRoutes allowedRoles={['ADMIN']} />}>
            <Route path="admin/*" name="Home" element={<AdminLayout />} />
          </Route>
          <Route element={<ProtectedRoutes allowedRoles={['COMPANY', 'CUSTOMER']} />}>
            {' '}
            <Route path="user/*" name="UserLayout" element={<UserLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
