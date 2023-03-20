import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'

import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoutes from './ProtectedRoutes'
import {
  Login,
  ForgetPassword,
  BuyerRegister,
  SellerRegister,
  RegistrationIntro,
  Unauthorized,
  Landing,
} from './views/common'
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
          <Route path="/forget-password" name="ForgetPassword" element={<ForgetPassword />} />
          <Route path="/buyer-registration" name="BuyerRegister" element={<BuyerRegister />} />
          <Route path="/seller-registration" name="SellerRegister" element={<SellerRegister />} />
          <Route element={<ProtectedRoutes allowedRoles={['ADMIN']} />}>
            <Route path="admin/*" name="Home" element={<AdminLayout />} />
          </Route>
          <Route element={<ProtectedRoutes allowedRoles={['SELLER', 'BUYER']} />}>
            {' '}
            <Route path="user/*" name="UserLayout" element={<UserLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
