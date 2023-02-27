import React, { useState, useEffect } from 'react'
import { AppContent, TopBar, SideBar } from '../components'
import { useNavigate } from 'react-router-dom'
const DefaultLayout = () => {
  const [isActive, setActive] = useState(false)


  return (
    <>
      <div id="wrapper" className="d-flex col-md-12">
        <SideBar setActive={setActive} isActive={isActive} />
        <div id="content-wrapper">
          <TopBar setActive={setActive} isActive={isActive} />
          <AppContent />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
